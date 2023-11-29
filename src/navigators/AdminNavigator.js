import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { AdminDrawerContent, AdminDashboardScreen, AdminVideosScreen, AdminThoughtsScreen, AdminAstrologersScreen, AdminUsersScreen } from '../screens'

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = createStackNavigator();

function AdminStack() {
    return (
        <Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Screen name='AdminDashboardScreen' component={AdminDashboardScreen} />
            <Screen name='AdminVideosScreen' component={AdminVideosScreen} />
            <Screen name='AdminThoughtsScreen' component={AdminThoughtsScreen} />
            <Screen name='AdminAstrologersScreen' component={AdminAstrologersScreen} />
            <Screen name='AdminUsersScreen' component={AdminUsersScreen} />
        </Navigator>
    )
}

export default function AdminNavigator(props) {
    return (
        <Drawer.Navigator
            drawerContent={props => <AdminDrawerContent {...props} />}
            drawerStyle={{ borderTopEndRadius: 10, borderBottomEndRadius: 10, backgroundColor: 'transparent' }} >
            <Drawer.Screen name='AdminStackNavigator' component={AdminStack} />
        </Drawer.Navigator>
    )
}