import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {VALID_RESPONSE} from '../../../constants';
import {AppService} from '../../../services';
import {CustomLoader} from '../../../components';
import {CustomHeader} from '../../../components';
import Snackbar from 'react-native-snackbar';

const appService = new AppService();

export default function index(props) {
  const [loading, setLoading] = useState(true);
  const [astrologerList, setAstrologerList] = useState([]);

  useEffect(async () => {
    let response = await appService.adminGetAstrologerList();
    if (response && response.status === VALID_RESPONSE.STATUS_ID) {
      Snackbar.show({
        text: 'Astrologer fetched successfully',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'green',
      });
      setAstrologerList(response.data);
      setLoading(false);
    } else {
      Snackbar.show({
        text: 'Something went wrong!',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
      setLoading(false);
    }
    setLoading(false);
  }, []);

  const getUsersList = async () => {
    let response = await appService.adminGetUserList();
    if (response && response.status === VALID_RESPONSE.STATUS_ID) {
      setAstrologerList(response.data);
    } else {
      Snackbar.show({
        text: 'Something went wrong!',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
    }
  };

  const onOkPress = async userID => {
    setLoading(true);
    const payload = {
      userIdArray: [userID],
    };
    let response = await appService.adminDisableUser(payload);
    if (response && response.status === VALID_RESPONSE.STATUS_ID) {
      Snackbar.show({
        text: 'User disbaled successfully',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'green',
      });
      getUsersList();
      setLoading(false);
    } else {
      Snackbar.show({
        text: 'Something went wrong!',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
      setLoading(false);
    }
    setLoading(false);
  };

  renderItems = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#FFF',
          elevation: 2,
        }}>
        <Image
          source={{uri: 'https://i.pravatar.cc/80'}}
          style={{height: 70, width: 70, borderRadius: 35, marginRight: 10}}
        />
        <View style={{marginHorizontal: 10, justifyContent: 'space-evenly'}}>
          <Text style={{fontWeight: '700', fontSize: 18, color: '#2B2353'}}>
            {item.first_name + ' ' + item.last_name}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#98E798',
                elevation: 2,
                paddingVertical: 7,
                paddingHorizontal: 20,
                borderRadius: 5,
                marginRight: 20,
              }}
              activeOpacity={0.7}>
              <Text style={{fontWeight: '700'}}>{'Approve'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF7575',
                elevation: 2,
                paddingVertical: 7,
                paddingHorizontal: 20,
                borderRadius: 5,
              }}
              activeOpacity={0.7}
              onPress={() => {
                Alert.alert(
                  'Delete Astrologer',
                  'Are you sure you want to delete this Astrologer?',
                  [
                    {
                      text: 'Cancel',
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => onOkPress(item.id)},
                  ],
                );
              }}>
              <Text style={{fontWeight: '700', color: '#FFF'}}>
                {'Disable'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
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
            {'Astrologers'}
          </Text>
        </View>

        <View
          style={{
            marginTop: 50,
            backgroundColor: '#DEE4F2',
            height: 40,
            borderRadius: 20,
            width: '80%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            elevation: 5,
          }}>
          <TextInput
            placeholder="Search Astrologer"
            placeholderTextColor={'grey'}
            style={{color: 'black'}}
          />
          <FontAwesome name="search" color="#000" size={20} />
        </View>
        {loading ? (
          <CustomLoader text="Loading..." />
        ) : (
          <View style={{flex: 1}}>
            <FlatList
              data={astrologerList}
              extraData={astrologerList}
              contentContainerStyle={{
                paddingHorizontal: 30,
                paddingVertical: 20,
              }}
              renderItem={({item, index}) => renderItems({item, index})}
              keyExtractor={(_item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return <View style={{marginVertical: 6}} />;
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
}
