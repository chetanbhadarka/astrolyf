import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../../redux/actions';

export default function index(props) {
  const dispatch = useDispatch();

  const {userData} = useSelector(state => state.authentication);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: '#DEE4F2',
        overflow: 'hidden',
      }}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {/* Drawer Header */}
        <Text
          style={{
            color: '#A38249',
            height: 48,
            fontSize: 24,
            fontWeight: '700',
            letterSpacing: 0.5,
            alignSelf: 'center',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {'AstroLyf'}
        </Text>

        {/* Image Header */}
        <View
          style={{
            height: 200,
            padding: 10,
            flexDirection: 'row',
            backgroundColor: '#E1B87A',
            elevation: 2,
          }}>
          <View
            style={{
              borderRadius: 60,
              alignSelf: 'flex-end',
              backgroundColor: '#FFF',
              elevation: 5,
            }}>
            <Image
              source={{uri: 'https://i.pravatar.cc/150'}}
              style={{
                height: 120,
                width: 120,
                borderRadius: 60,
              }}
            />
          </View>
          <View style={{paddingLeft: 10, justifyContent: 'flex-end'}}>
            <Text style={{fontSize: 8, color: '#FFF'}}>{'Exp 8 yrs'}</Text>
            <Text style={{fontSize: 11, color: '#FFF'}}>
              {'Astrologer Type'}
            </Text>
            <Text style={{fontSize: 22, fontWeight: '700', color: '#FFF'}}>
              {userData.first_name + ' ' + userData.last_name}
            </Text>
          </View>
        </View>

        {/* Item List */}
        <View style={{paddingHorizontal: 10}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
            }}
            activeOpacity={0.9}
            onPress={() => props.navigation.navigate('AstroWalletScreen')}>
            <Ionicons
              name="ios-wallet"
              size={32}
              color="#000"
              style={{marginRight: 20}}
            />
            <Text style={{fontWeight: '700', color: '#000', fontSize: 16}}>
              {'Wallet'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
            }}
            activeOpacity={0.9}
            onPress={() => {}}>
            <Ionicons
              name="ios-newspaper"
              size={32}
              color="#000"
              style={{marginRight: 20}}
            />
            <Text style={{fontWeight: '700', color: '#000', fontSize: 16}}>
              {'Generated Reports'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
            }}
            activeOpacity={0.9}
            onPress={() =>
              props.navigation.navigate('AstroOrderHistoryScreen')
            }>
            <MaterialIcons
              name="history"
              size={32}
              color="#000"
              style={{marginRight: 20}}
            />
            <Text style={{fontWeight: '700', color: '#000', fontSize: 16}}>
              {'Order History'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
            }}
            activeOpacity={0.9}
            onPress={() => props.navigation.navigate('AstroSupportChatScreen')}>
            <MaterialIcons
              name="support-agent"
              size={32}
              color="#000"
              style={{marginRight: 20}}
            />
            <Text style={{fontWeight: '700', color: '#000', fontSize: 16}}>
              {'Support Chat'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
            }}
            activeOpacity={0.9}
            onPress={() => {}}>
            <MaterialCommunityIcons
              name="shield-account"
              size={32}
              color="#000"
              style={{marginRight: 20}}
            />
            <Text style={{fontWeight: '700', color: '#000', fontSize: 16}}>
              {'Account Details'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
            }}
            activeOpacity={0.9}
            onPress={() => {}}>
            <MaterialIcons
              name="quick-contacts-mail"
              size={32}
              color="#000"
              style={{marginRight: 20}}
            />
            <Text style={{fontWeight: '700', color: '#000', fontSize: 16}}>
              {'Contact Us'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
            }}
            activeOpacity={0.9}
            onPress={() => {}}>
            <Entypo
              name="info-with-circle"
              size={32}
              color="#000"
              style={{marginRight: 20}}
            />
            <Text style={{fontWeight: '700', color: '#000', fontSize: 16}}>
              {'About Us'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{borderWidth: 1, margin: 10, borderColor: '#707070'}} />

        <Text
          style={{
            color: '#F9532C',
            fontSize: 18,
            fontWeight: '500',
            alignSelf: 'center',
            marginVertical: 5,
            letterSpacing: 0.5,
          }}
          onPress={() => dispatch(userActions.logout())}>
          {'Log Out'}
        </Text>

        <Text
          style={{
            color: '#0D0D0E',
            fontSize: 12,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          {'Follow us on:'}
        </Text>

        {/* Social View */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}>
          <Fontisto
            name="facebook"
            size={26}
            color="#345AA6"
            style={{marginHorizontal: 10}}
          />
          <Fontisto
            name="instagram"
            size={26}
            color="#E962C5"
            style={{marginHorizontal: 10}}
          />
          <Fontisto
            name="twitter"
            size={26}
            color="#34A8F5"
            style={{marginHorizontal: 10}}
          />
        </View>

        <Text
          style={{
            color: '#0D0D0E',
            fontSize: 12,
            fontWeight: '700',
            alignSelf: 'center',
            marginVertical: 30,
          }}
          onPress={() => props.navigation.navigate('AstroTermsScreen')}>
          {'Terms & Conditions'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
