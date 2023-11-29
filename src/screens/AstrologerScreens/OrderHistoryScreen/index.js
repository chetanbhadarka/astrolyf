import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {CustomHeader} from '../../../components';
import OrderHistoryCall from './orderHistoryCall';
import OrderHistoryChat from './orderHistoryChat';
import OrderHistoryReport from './orderHistoryReport';
import OrderHistoryHoroscope from './orderHistoryHoroscope';

const TopTab = createMaterialTopTabNavigator();

export default function index(props) {
  return (
    <View style={{flex: 1}}>
      {/* Custom Header */}
      <CustomHeader {...props} />

      {/* Main Content */}
      <TopTab.Navigator
        lazy
        tabBarOptions={{
          scrollEnabled: true,
          activeTintColor: '#FFF',
          style: {backgroundColor: '#060E26'},
        }}>
        <TopTab.Screen
          name="OrderHistoryCall"
          component={OrderHistoryCall}
          options={{tabBarLabel: 'Call'}}
        />
        <TopTab.Screen
          name="OrderHistoryChat"
          component={OrderHistoryChat}
          options={{tabBarLabel: 'Chat'}}
        />
        <TopTab.Screen
          name="OrderHistoryReport"
          component={OrderHistoryReport}
          options={{tabBarLabel: 'Report'}}
        />
        <TopTab.Screen
          name="OrderHistoryHoroscope"
          component={OrderHistoryHoroscope}
          options={{tabBarLabel: 'Horoscope'}}
        />
      </TopTab.Navigator>
    </View>
  );
}
