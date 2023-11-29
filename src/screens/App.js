import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';

import {
  AuthNavigator,
  AstroDashNavigator,
  UserDashNavigator,
  AdminNavigator,
} from '../navigators';

export default function App() {
  const {userRole} = useSelector(state => state.authentication);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {userRole === '' ? (
        <AuthNavigator />
      ) : userRole === 'astrologer' ? (
        <AstroDashNavigator />
      ) : userRole === 'user' ? (
        <UserDashNavigator />
      ) : userRole === 'admin' ? (
        <AdminNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}
