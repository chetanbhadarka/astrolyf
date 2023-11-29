import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import {
    AstroDrawerContent,
    AstroDashboardScreen,
    AstroDocumentsScreen,
    AstroTermsScreen,
    AstroWalletScreen,
    AstroOrderHistoryScreen,
    AstroSupportChatScreen,
} from '../screens'

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = createStackNavigator();

function AstroStack() {
    return (
        <Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Screen name='AstroDashScreen' component={AstroDashboardScreen} />
            <Screen name='AstroDocumentScreen' component={AstroDocumentsScreen} />
            <Screen name='AstroTermsScreen' component={AstroTermsScreen} />
            <Screen name='AstroWalletScreen' component={AstroWalletScreen} />
            <Screen name='AstroOrderHistoryScreen' component={AstroOrderHistoryScreen} />
            <Screen name='AstroSupportChatScreen' component={AstroSupportChatScreen} />
        </Navigator>
    )
}

export default function AstroDashNavigator(props) {
    return (
        <Drawer.Navigator
            drawerContent={props => <AstroDrawerContent {...props} />}
            drawerStyle={{ borderTopEndRadius: 10, borderBottomEndRadius: 10, backgroundColor: 'transparent' }} >
            <Drawer.Screen name='AstroStackNavigator' component={AstroStack} />
        </Drawer.Navigator >
    )
}