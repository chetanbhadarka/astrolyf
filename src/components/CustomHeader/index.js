import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

import {useSelector} from 'react-redux';

export default function index(props) {
  const {userRole} = useSelector(state => state.authentication);

  onNotificationPress = () => {
    userRole === 'user'
      ? props.navigation.navigate('UserNotificationScreen')
      : null;
  };

  return (
    <View
      style={{
        height: 48,
        flexDirection: 'row',
        backgroundColor: '#E1B87A',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{marginLeft: 10}}>
        <Entypo
          name="menu"
          color="#FFF"
          size={30}
          onPress={() => props.navigation.openDrawer()}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            color: '#FFF',
            fontWeight: '500',
            letterSpacing: 0.8,
            textTransform: 'capitalize',
          }}>
          {props.headerName ? props.headerName : 'Astrolyf'}
        </Text>
      </View>
      <View style={{marginRight: 10}}>
        {userRole === 'user' ? (
          <Octicons
            name="bell"
            color="#FFF"
            size={24}
            onPress={() => onNotificationPress()}
          />
        ) : null}
      </View>
    </View>
  );
}
