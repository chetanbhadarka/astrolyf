import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TextInput, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {CustomHeader} from '../../../components';
import {AppService} from '../../../services';
import {VALID_RESPONSE} from '../../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {LocalstoreService} from '../../../services';

const appService = new AppService();
const localstoreService = new LocalstoreService();

export default function index(props) {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const {route} = props;
  const {params} = route;
  const {headername} = params;
  const HEADER = headername.toLowerCase();

  const {userData} = useSelector(state => state.authentication);
  console.log('userfata', userData);
  const [messageData, setMessageData] = useState([]);

  useEffect(async () => {
    let response = await appService.getAllMessages(HEADER);
    if (response && response.status === VALID_RESPONSE.STATUS_ID) {
      //   Snackbar.show({
      //     text: 'Astrologer fetched successfully',
      //     duration: Snackbar.LENGTH_LONG,
      //     backgroundColor: 'green',
      //   });
      //   setUserPostList(response.data);
      //   setLoading(false);
      setMessageData(response.data.message_list);
    } else {
      //   Snackbar.show({
      //     text: 'Something went wrong!',
      //     duration: Snackbar.LENGTH_LONG,
      //     backgroundColor: 'red',
      //   });
      //   setLoading(false);
      alert('Something went wrong, Please login again');
      // let response = await appService.refreshToken();
      // if (response && response.status === VALID_RESPONSE.STATUS_ID) {
      //   localstoreService._storeData(
      //     'access_token',
      //     response.data.tokens.access.token,
      //   );

      //   localstoreService._storeData(
      //     'refresh_token',
      //     response.data.tokens.refresh.token,
      //   );
      // }
    }
    // setLoading(false);
  }, []);

  const getNewMessage = async () => {
    let response = await appService.getAllMessages(HEADER);
    if (response && response.status === VALID_RESPONSE.STATUS_ID) {
      setMessageData(response.data.message_list);
    } else {
    }
  };

  const onMessageSend = async () => {
    if (message != '' && message != null) {
      const payload = {message: message};
      await appService.sendMessage(payload);
      setMessage('');
      getNewMessage();
    } else {
    }
  };

  renderItems = ({item, index}) => {
    console.log('ITEM', item);
    return (
      <View
        key={index}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:
            item?.user?.id !== userData.id ? 'flex-start' : 'flex-end',
          marginHorizontal: 10,
        }}>
        {item?.user?.id !== userData.id ? (
          <MaterialIcons
            name="support-agent"
            size={30}
            color="#000"
            style={{marginRight: 5}}
          />
        ) : null}
        <View
          style={{
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginVertical: 8,
            backgroundColor: '#FFF',
            elevation: 2,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              width:
                Dimensions.get('screen').width -
                Dimensions.get('screen').width / 3,
            }}>
            {item.message}
          </Text>
        </View>
        {item?.user?.id === userData.id ? (
          <MaterialIcons
            name="person"
            size={30}
            color="#000"
            style={{marginLeft: 5}}
          />
        ) : null}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Custom Header */}
      <CustomHeader headerName={headername} />
      {/* Main Content */}
      <View style={{flex: 1}}>
        <FlatList
          data={messageData}
          extraData={messageData}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => renderItems({item, index})}
          keyExtractor={(item, index) => index.toString()}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 48,
            marginVertical: 10,
            marginHorizontal: 30,
            paddingHorizontal: 16,
            borderRadius: 24,
            backgroundColor: '#FFF',
            elevation: 2,
          }}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Enter Your Message"
            style={{
              paddingVertical: 0,
              color: 'black',
            }}
            placeholderTextColor={'grey'}
            returnKeyType="done"
          />
          <Ionicons
            name="ios-send"
            size={24}
            color="#000"
            onPress={onMessageSend}
          />
        </View>
      </View>
    </View>
  );
}
