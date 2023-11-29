import React, {useEffect, useState, createRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Images} from '../../../assets';
import {useDispatch} from 'react-redux';
import {userActions} from '../../../redux/actions';
import {VALID_RESPONSE} from '../../../constants';
import {CustomLoader} from '../../../components';
import {AuthService, LocalstoreService} from '../../../services';

const authService = new AuthService();
const localstoreService = new LocalstoreService();

export default function index(props) {
  const dispatch = useDispatch();

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const onLoginPress = async () => {
    let isValid = true;

    if (userEmail.trim() == 0) {
      isValid = false;
      // setEmailError('Please enter email address');
      alert('Please enter email address');
    } else if (!userEmail.match(mailformat)) {
      isValid = false;
      alert('Please enter valid email address');
      // setEmailError('Please enter valid email address');
    }

    if (userPassword.length <= 6) {
      isValid = false;
      //    setFirstNameError('Please enter password');
      alert('Please enter password');
    }

    if (isValid) {
      setLoading(true);
      const payload = {
        email: userEmail,
        password: userPassword,
      };
      let response = await authService.userLogin(payload);
      if (response && response.status === VALID_RESPONSE.STATUS_ID) {
        setLoading(false);
        dispatch(userActions.login(response.data));

        localstoreService._storeData(
          'access_token',
          response.data.tokens.access.token,
        );

        localstoreService._storeData(
          'refresh_token',
          response.data.tokens.refresh.token,
        );
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={Images.AppLogo}
        style={{
          height: 150,
          width: 150,
          alignSelf: 'center',
          marginVertical: 30,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          marginHorizontal: 14,
          paddingHorizontal: 20,
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            textTransform: 'uppercase',
            color: '#000',
            textShadowColor: 'rgba(0, 0, 255, 0.4)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 8,
            marginBottom: 20,
          }}>
          {'Astrologer  Login'}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFF',
            elevation: 4,
            borderRadius: 4,
            paddingHorizontal: 10,
            marginVertical: 5,
          }}>
          <SimpleLineIcons
            name="user"
            color="#224A56"
            size={18}
            style={{marginRight: 5}}
          />
          <TextInput
            onChangeText={UserEmail => setUserEmail(UserEmail)}
            placeholder="Email"
            placeholderTextColor={'grey'}
            style={{flex: 1, color: 'black'}}
            blurOnSubmit={false}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFF',
            elevation: 4,
            borderRadius: 4,
            paddingHorizontal: 10,
            marginVertical: 5,
          }}>
          <SimpleLineIcons
            name="lock"
            color="#224A56"
            size={18}
            style={{marginRight: 5}}
          />
          <TextInput
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="●●●●●●"
            secureTextEntry
            placeholderTextColor={'grey'}
            style={{flex: 1, color: 'black'}}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#E1B87A',
            height: 42,
            borderRadius: 21,
            marginHorizontal: 30,
            elevation: 2,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={0.8}
          // onPress={() => props.navigation.navigate('AstroDashScreen')}
          onPress={onLoginPress}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: '#FFF',
              fontWeight: '700',
              letterSpacing: 1.25,
              fontSize: 16,
            }}>
            {'Login'}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 12,
            color: '#A3A9BB',
            fontWeight: '600',
            alignSelf: 'center',
            marginTop: 50,
            marginBottom: 20,
            padding: 10,
          }}
          onPress={() => props.navigation.navigate('AstroSignUpScreen')}>
          {"Don't have an account? SignUp here..."}
        </Text>
      </View>

      {loading && <CustomLoader text="Loading..." />}
    </View>
  );
}
