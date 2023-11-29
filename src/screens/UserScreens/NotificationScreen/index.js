import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import { CustomHeader } from '../../../components'

export default function index(props) {

    return (
        <View style={{ flex: 1 }}>

            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Main Content */}
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16, }}>
                    <Entypo name='chevron-left' size={34} color='#E1B87A' onPress={() => props.navigation.goBack()} style={{ position: 'absolute', left: 10 }} />
                    <Text style={{ color: '#E1B87A', fontSize: 20, fontWeight: '700', letterSpacing: 1 }}>Notifications</Text>
                </View>
                
                <View style={{ backgroundColor: '#FFF', borderRadius: 8, elevation: 5, paddingHorizontal: 20, marginHorizontal: 18, marginTop: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Theta Healing</Text>
                    <Text style={{ marginTop: 10 }}>No Data Available</Text>
                </View>
                <View style={{ backgroundColor: '#FFF', borderRadius: 8, elevation: 5, paddingHorizontal: 20, marginHorizontal: 18, marginTop: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Theta Healing</Text>
                    <Text style={{ marginTop: 10 }}>No Data Available</Text>
                </View>
                <View style={{ backgroundColor: '#FFF', borderRadius: 8, elevation: 5, paddingHorizontal: 20, marginHorizontal: 18, marginTop: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Theta Healing</Text>
                    <Text style={{ marginTop: 10 }}>No Data Available</Text>
                </View>
                <View style={{ backgroundColor: '#FFF', borderRadius: 8, elevation: 5, paddingHorizontal: 20, marginHorizontal: 18, marginTop: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Theta Healing</Text>
                    <Text style={{ marginTop: 10 }}>No Data Available</Text>
                </View>
                <View style={{ backgroundColor: '#FFF', borderRadius: 8, elevation: 5, paddingHorizontal: 20, marginHorizontal: 18, marginTop: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Theta Healing</Text>
                    <Text style={{ marginTop: 10 }}>No Data Available</Text>
                </View>
            
            </View>
        </View>
    )
}