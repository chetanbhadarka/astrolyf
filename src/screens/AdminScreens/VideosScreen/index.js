import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {VALID_RESPONSE} from '../../../constants';
import {CustomLoader} from '../../../components';
import {AppService} from '../../../services';
import {CustomHeader} from '../../../components';
import Snackbar from 'react-native-snackbar';

const appService = new AppService();

export default function index(props) {
  const [loading, setLoading] = useState(false);
  const [videoLink, setVideoLink] = useState('');

  const onPostVideoPress = async () => {
    if (videoLink != null && videoLink != '') {
      setLoading(true);
      Keyboard.dismiss();
      const payload = {
        videoLink: videoLink,
      };

      let response = await appService.adminPostVideo(payload);
      if (response && response.status === VALID_RESPONSE.STATUS_ID) {
        Snackbar.show({
          text: 'Success',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'green',
        });
        setTimeout(() => {
          setLoading(false);
          props.navigation.goBack();
        }, 1000);
      } else {
        Snackbar.show({
          text: 'Something went wrong!',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
        setLoading(false);
      }
    } else {
      Snackbar.show({
        text: 'Please enter Youtube link!',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      {/* Custom Header */}
      <CustomHeader {...props} />

      {/* Main Content */}
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}>
          <Entypo
            name="chevron-left"
            size={34}
            color="#E1B87A"
            onPress={() => props.navigation.goBack()}
            style={{position: 'absolute', left: 10}}
          />
          <Text
            style={{
              color: '#E1B87A',
              fontSize: 20,
              fontWeight: '700',
              letterSpacing: 1,
            }}>
            {'Upload Video'}
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              marginHorizontal: 30,
              paddingVertical: 50,
              borderRadius: 20,
              backgroundColor: '#FFF',
              elevation: 1,
            }}>
            <TextInput
              style={{
                height: 42,
                marginHorizontal: 30,
                paddingHorizontal: 30,
                borderRadius: 21,
                backgroundColor: '#DEE4F2',
                elevation: 5,
                color: 'black',
              }}
              placeholder="Enter YouTube link"
              placeholderTextColor="#B0B2C9"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={videoLink}
              onChangeText={setVideoLink}
              onSubmitEditing={Keyboard.dismiss}
            />

            <TouchableOpacity
              style={{
                height: 40,
                width: 150,
                marginTop: 50,
                borderRadius: 20,
                alignSelf: 'center',
                backgroundColor: '#E1B87A',
                elevation: 3,
              }}
              activeOpacity={0.6}
              onPress={onPostVideoPress}>
              <Text
                style={{
                  flex: 1,
                  color: '#FFF',
                  fontSize: 20,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                {'Post'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 40,
                width: 150,
                marginTop: 30,
                borderRadius: 20,
                alignSelf: 'center',
                backgroundColor: '#EBC132',
                elevation: 3,
              }}
              activeOpacity={0.6}
              onPress={() => {}}>
              <Text
                style={{
                  flex: 1,
                  color: '#060501',
                  fontSize: 20,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                {'Cancel'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {loading && <CustomLoader text="Loading..." />}
    </View>
  );
}
