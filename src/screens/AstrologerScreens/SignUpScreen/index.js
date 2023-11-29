import React, {useEffect, useState, createRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Images} from '../../../assets';
import {VALID_RESPONSE} from '../../../constants';
import {useDispatch} from 'react-redux';
import {userActions} from '../../../redux/actions';
import {CustomLoader} from '../../../components';
import {AuthService, LocalstoreService} from '../../../services';

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

  const onSubmitPress = async () => {
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
        name: userName,
        email: userEmail,
        password: userPassword,
        phone_number: userMobileNo,
        role: 'astrologer',
      };
      let response = await authService.astroRegistration(payload);
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
        // props.navigation.pop(2);
        Alert.alert(
          'Success!!',
          'You have successfuly registered as Astrologer!!. Please Login.',
          [
            {
              text: 'Cancel',
              onPress: () => props.navigation.pop(1),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => props.navigation.pop(1)},
          ],
        );
      } else {
        alert('Something went wrong, please try again!!');
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
      <View style={{marginHorizontal: 14, borderRadius: 5}}>
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
          {'Astrologer Signup'}
        </Text>

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
            marginHorizontal: 30,
            elevation: 2,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={0.8}
          onPress={onSubmitPress}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: '#FFF',
              fontWeight: '700',
              letterSpacing: 1.25,
              fontSize: 16,
            }}>
            {'submit'}
          </Text>
        </TouchableOpacity>
      </View>

      {loading && <CustomLoader text="Loading..." />}
    </View>
  );
}
