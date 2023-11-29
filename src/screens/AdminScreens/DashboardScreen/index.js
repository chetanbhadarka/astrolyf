import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {CustomHeader} from '../../../components';
import {Icons} from '../../../assets';

export default function index(props) {
  return (
    <View style={{flex: 1}}>
      {/* Custom Header */}
      <CustomHeader {...props} />

      {/* Main Content */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            marginHorizontal: 30,
            backgroundColor: '#FFF',
            elevation: 2,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 34,
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginVertical: 10,
              backgroundColor: '#D3DBEC',
            }}
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('AdminVideosScreen')}>
            <View
              style={{
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 2},
                shadowRadius: 3,
                elevation: 3,
                backgroundColor: '#FFF',
                borderRadius: 5,
                padding: 2,
              }}>
              <Image source={Icons.Video} style={{height: 36, width: 36}} />
            </View>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                flex: 1,
                color: '#FFF',
                fontWeight: 'bold',
                textShadowColor: '#000',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 8,
                letterSpacing: 1,
              }}>
              Video
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 34,
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginVertical: 10,
              backgroundColor: '#D3DBEC',
            }}
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('AdminThoughtsScreen')}>
            <View
              style={{
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 2},
                shadowRadius: 3,
                elevation: 3,
                backgroundColor: '#FFF',
                borderRadius: 5,
                padding: 2,
              }}>
              <Image source={Icons.Thought} style={{height: 36, width: 36}} />
            </View>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                flex: 1,
                color: '#FFF',
                fontWeight: 'bold',
                textShadowColor: '#000',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 8,
                letterSpacing: 1,
              }}>
              Thoughts
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 34,
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginVertical: 10,
              backgroundColor: '#D3DBEC',
            }}
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('AdminAstrologersScreen')}>
            <View
              style={{
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 2},
                shadowRadius: 3,
                elevation: 3,
                backgroundColor: '#FFF',
                borderRadius: 5,
                padding: 2,
              }}>
              <Image
                source={Icons.Astrologer}
                style={{height: 36, width: 36}}
              />
            </View>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                flex: 1,
                color: '#FFF',
                fontWeight: 'bold',
                textShadowColor: '#000',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 8,
                letterSpacing: 1,
              }}>
              Astrologer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 34,
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginVertical: 10,
              backgroundColor: '#D3DBEC',
            }}
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('AdminUsersScreen')}>
            <View
              style={{
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 2},
                shadowRadius: 3,
                elevation: 3,
                backgroundColor: '#FFF',
                borderRadius: 5,
                padding: 2,
              }}>
              <Image source={Icons.User} style={{height: 36, width: 36}} />
            </View>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                flex: 1,
                color: '#FFF',
                fontWeight: 'bold',
                textShadowColor: '#000',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 8,
                letterSpacing: 1,
              }}>
              User
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
