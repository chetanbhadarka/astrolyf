import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
    RegistrationScreen,
    OTPScreen1,
    OTPScreen2,
    AdminLoginScreen,
    AstroLoginScreen,
    AstroSignUpScreen,
    UserLoginScreen,
} from '../screens'

const { Navigator, Screen } = createStackNavigator()

export default function AuthNavigator(props) {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='RegistrationScreen' component={RegistrationScreen} />
            <Screen name='OTPScreen1' component={OTPScreen1} />
            <Screen name='OTPScreen2' component={OTPScreen2} />
            <Screen name='AstroLoginScreen' component={AstroLoginScreen} />
            <Screen name='AstroSignUpScreen' component={AstroSignUpScreen} />
            <Screen name='UserLoginScreen' component={UserLoginScreen} />
            <Screen name='AdminLoginScreen' component={AdminLoginScreen} />
        </Navigator>
    )
}