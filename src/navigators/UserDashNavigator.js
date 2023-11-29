import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {
  UserDrawerContent,
  UserDashboardScreen,
  UserHoroscopeScreen,
  UserKundaliScreen,
  UserSettingsScreen,
  UserNotificationScreen,
  UserCommunityScreen,
  UserTalkToAstroScreen,
  UserCallAstroScreen,
  UserTermsScreen,
  UserWalletScreen,
  WebViewScreen,
  UserFormsScreen,
  UserOrederHistoryScreen,
  UserSupportChatScreen,
  UserChatScreen,
} from '../screens';

const Drawer = createDrawerNavigator();
const {Navigator, Screen} = createStackNavigator();

function UserStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Screen name="UserDashScreen" component={UserDashboardScreen} />
      <Screen name="UserHoroscopeScreen" component={UserHoroscopeScreen} />
      <Screen name="UserKundaliScreen" component={UserKundaliScreen} />
      <Screen name="UserSettingsScreen" component={UserSettingsScreen} />
      <Screen
        name="UserNotificationScreen"
        component={UserNotificationScreen}
      />
      <Screen name="UserCommunityScreen" component={UserCommunityScreen} />
      <Screen name="UserTalkToAstroScreen" component={UserTalkToAstroScreen} />
      <Screen name="UserCallAstroScreen" component={UserCallAstroScreen} />
      <Screen name="UserTermsScreen" component={UserTermsScreen} />
      <Screen name="UserWalletScreen" component={UserWalletScreen} />
      <Screen name="WebViewScreen" component={WebViewScreen} />
      <Screen name="UserFormsScreen" component={UserFormsScreen} />
      <Screen
        name="UserOrederHistoryScreen"
        component={UserOrederHistoryScreen}
      />
      <Screen name="UserSupportChatScreen" component={UserSupportChatScreen} />
      <Screen name="UserChatScreen" component={UserChatScreen} />
    </Navigator>
  );
}

export default function AstroDashNavigator(props) {
  return (
    <Drawer.Navigator
      drawerContent={props => <UserDrawerContent {...props} />}
      drawerStyle={{
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: 'transparent',
      }}>
      <Drawer.Screen name="UserStackNavigator" component={UserStack} />
    </Drawer.Navigator>
  );
}
