// USER REGISTRATION SCREEN
import React, {useEffect, useState, createRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Images} from '../../assets';
import {VALID_RESPONSE} from '../../constants';
import {useDispatch} from 'react-redux';
import {userActions} from '../../redux/actions';
import {CustomLoader} from '../../components';
import {AuthService, LocalstoreService} from '../../services';

const authService = new AuthService();
const localstoreService = new LocalstoreService();

export default function index(props) {
  const dispatch = useDispatch();

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userMobileNo, setUserMobileNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const userNameRef = createRef();
  const passwordInputRef = createRef();
  const mobileNoRef = createRef();

  const onContinuePress = async () => {
    let isValid = true;

    if (userEmail.trim() == 0) {
      isValid = false;
      alert('Please enter email address');
    } else if (!userEmail.match(mailformat)) {
      isValid = false;
      alert('Please enter valid email address');
    }

    if (userName == '') {
      isValid = false;
      alert('Please enter username');
    }

    if (userPassword == '') {
      isValid = false;
      alert('Please enter password');
    } else if (userPassword.length < 8) {
      isValid = false;
      alert('Minimum 8 characters required');
    }

    if (userMobileNo == '') {
      isValid = false;
      alert('Please enter mobile number');
    } else if (userMobileNo.length < 10) {
      isValid = false;
      alert('Enter valid mobile number');
    }

    if (isValid) {
      setLoading(true);
      const payload = {
        email: userEmail,
        name: userName,
        password: userPassword,
        phone_number: userMobileNo,
      };
      let response = await authService.userRegistration(payload);
      if (response && response.status === VALID_RESPONSE.STATUS_ID_CREATION) {
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
        // props.navigation.navigate('OTPScreen1');
      } else {
        alert('Something went wrong, please try again!!');
        setLoading(false);
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
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
          marginHorizontal: 18,
          paddingVertical: 14,
          paddingHorizontal: 20,
          backgroundColor: '#FFF',
          borderRadius: 5,
          elevation: 4,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather
            name="mail"
            color="#224A56"
            size={18}
            style={{marginRight: 5}}
          />
          <TextInput
            onChangeText={setUserEmail}
            placeholder="jhondoe@email.com"
            placeholderTextColor={'grey'}
            style={{flex: 1, color: 'black'}}
            blurOnSubmit={false}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
            onSubmitEditing={() =>
              userNameRef.current && userNameRef.current.focus()
            }
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SimpleLineIcons
            name="user"
            color="#224A56"
            size={18}
            style={{marginRight: 5}}
          />

          <TextInput
            ref={userNameRef}
            onChangeText={setUserName}
            placeholder="Jhon Doe"
            placeholderTextColor={'grey'}
            style={{flex: 1, color: 'black'}}
            blurOnSubmit={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SimpleLineIcons
            name="lock"
            color="#224A56"
            size={18}
            style={{marginRight: 5}}
          />

          <TextInput
            ref={passwordInputRef}
            blurOnSubmit={false}
            onChangeText={setUserPassword}
            placeholder="●●●●●●"
            autoCapitalize="none"
            secureTextEntry
            placeholderTextColor={'grey'}
            style={{flex: 1, color: 'black'}}
            onSubmitEditing={() =>
              mobileNoRef.current && mobileNoRef.current.focus()
            }
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SimpleLineIcons
            name="phone"
            color="#224A56"
            size={18}
            style={{marginRight: 5}}
          />
          <TextInput
            ref={mobileNoRef}
            onChangeText={setUserMobileNo}
            placeholder="9999988888"
            placeholderTextColor={'grey'}
            style={{flex: 1, color: 'black'}}
            maxLength={10}
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#E1B87A',
          height: 42,
          borderRadius: 21,
          marginHorizontal: 34,
          elevation: 2,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        activeOpacity={0.8}
        onPress={onContinuePress}>
        <Text
          style={{
            textTransform: 'uppercase',
            color: '#FFF',
            fontSize: 16,
            fontWeight: '700',
            letterSpacing: 1.25,
          }}>
          {'continue'}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 34,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#8F94A6',
            borderWidth: 0.5,
            borderColor: '#8F94A6',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 4,
          }}
          onPress={() => props.navigation.navigate('AstroLoginScreen')}>
          {'Login as Astrologer ?'}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#8F94A6',
            borderWidth: 0.5,
            borderColor: '#8F94A6',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 4,
          }}
          onPress={() => props.navigation.navigate('AdminLoginScreen')}>
          {'Login as Admin ?'}
        </Text>
      </View>

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
        onPress={() => props.navigation.navigate('UserLoginScreen')}>
        {'Already have an account?'}
      </Text>

      {loading && <CustomLoader text="Loading..." />}
    </ScrollView>
  );
}
