import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'

import { CustomHeader } from '../../../components'

export default function index(props) {
    return (
        <View style={{ flex: 1 }}>

            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Screen Content */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text
                    style={{ fontSize: 30, alignSelf: 'center', textTransform: "capitalize", color: '#E1B87A', textShadowColor: 'rgba(0, 0, 0, 0.4)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 8, letterSpacing: 0.8, marginTop: 10 }}>
                    Documents
                </Text>

                <View style={{ marginHorizontal: 18, marginVertical: 50 }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, }}>PAN Card</Text>
                    <TextInput
                        style={{ backgroundColor: '#FFF', paddingVertical: 0, height: 42, borderRadius: 3, elevation: 1, fontSize: 14, paddingHorizontal: 10, marginTop: 10 }}
                        placeholder='Please enter your PAN Card No.'
                        keyboardType='default' />

                    <Text style={{ fontWeight: '700', fontSize: 16, marginTop: 20 }}>AADHAR Card</Text>
                    <TextInput
                        style={{ backgroundColor: '#FFF', paddingVertical: 0, height: 42, borderRadius: 3, elevation: 1, fontSize: 14, paddingHorizontal: 10, marginTop: 10 }}
                        placeholder='Please enter your AADHAR Card No.'
                        keyboardType='default' />

                    <Text style={{ fontWeight: '700', fontSize: 16, marginTop: 20 }}>Other Documents</Text>
                    <TextInput
                        style={{ backgroundColor: '#FFF', paddingVertical: 0, height: 42, borderRadius: 3, elevation: 1, fontSize: 14, paddingHorizontal: 10, marginTop: 10 }}
                        placeholder='Please enter your Document No.'
                        keyboardType='default' />

                    <TouchableOpacity
                        style={{ backgroundColor: '#E1B87A', height: 42, borderRadius: 21, width: 200, elevation: 2, alignSelf: 'center', marginTop: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} activeOpacity={0.8} onPress={() => { }}>
                        <Entypo name='upload' color='#FFF' size={24} />
                        <Text style={{ textTransform: 'capitalize', color: '#FFF', fontSize: 16, fontWeight: '700', letterSpacing: 1.25, marginLeft: 8 }}>Upload</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </View>
    )
}