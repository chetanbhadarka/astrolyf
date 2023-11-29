import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import { CustomHeader } from '../../../components'
import { useDispatch } from 'react-redux'
import { userActions } from '../../../redux/actions'

export default function index(props) {

    const dispatch = useDispatch()

    const [isEnabled1, setIsEnabled1] = useState(true);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    return (
        <View style={{ flex: 1 }}>

            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Main Content */}
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16, }}>
                    <Entypo name='chevron-left' size={34} color='#E1B87A' onPress={() => props.navigation.goBack()} style={{ position: 'absolute', left: 10 }} />
                    <Text style={{ color: '#E1B87A', fontSize: 20, fontWeight: '700', letterSpacing: 1 }}>Settings</Text>
                </View>
                <View style={{ backgroundColor: '#FFF', borderRadius: 8, elevation: 5, paddingHorizontal: 20, marginHorizontal: 18, marginVertical: 30, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: '700' }}>Notifications</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, marginBottom: 5 }}>
                        <Text>Daily Horoscope</Text>
                        <Switch
                            trackColor={{ false: "#9C9696", true: "#91D298" }}
                            thumbColor={isEnabled1 ? "#FFFFFF" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text>Others</Text>
                        <Switch
                            trackColor={{ false: "#9C9696", true: "#91D298" }}
                            thumbColor={isEnabled2 ? "#FFFFFF" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={isEnabled2} />
                    </View>
                </View>

                <TouchableOpacity
                    style={{ backgroundColor: '#E1B87A', height: 42, borderRadius: 5, marginHorizontal: 34, elevation: 4, marginTop: 20, alignItems: "center", justifyContent: "center" }}
                    activeOpacity={0.8}
                    onPress={() => dispatch(userActions.logout())}>
                    <Text
                        style={{ color: '#FFF', fontSize: 16, fontWeight: '700' }}>
                        Log Out
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ backgroundColor: '#8F94A7', height: 42, borderRadius: 5, marginHorizontal: 34, elevation: 4, marginTop: 40, alignItems: "center", justifyContent: "center" }}
                    activeOpacity={0.8}
                    onPress={() => { }}>
                    <Text
                        style={{ color: '#FFF', fontSize: 16, fontWeight: '700' }}>
                        Delete Account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}