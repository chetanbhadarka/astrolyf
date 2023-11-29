import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import { Images } from '../../assets'

export default function index(props) {
    return (
        <View style={{ flex: 1 }}>

            <Image source={Images.AppLogo} style={{ height: 150, width: 150, alignSelf: 'center', marginVertical: 30 }} />
            <View style={{ marginHorizontal: 18 }}>

                <Text style={{ fontWeight: '700', fontSize: 16, textShadowColor: 'rgba(0, 0, 0, 0.4)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 8 }}>Name :</Text>
                <TextInput
                    style={{ backgroundColor: '#FFF', paddingVertical: 0, height: 42, borderRadius: 3, elevation: 1, fontSize: 14, paddingHorizontal: 10, marginTop: 10 }}
                    placeholder='Please Enter Your Name'
                    keyboardType='default' />

                <Text style={{ fontWeight: '700', fontSize: 16, textShadowColor: 'rgba(0, 0, 0, 0.4)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 8, marginTop: 30 }}>Mobile No.</Text>
                <TextInput
                    style={{ backgroundColor: '#FFF', paddingVertical: 0, height: 42, borderRadius: 3, elevation: 1, fontSize: 14, paddingHorizontal: 10, marginTop: 10 }}
                    placeholder='+91'
                    keyboardType='phone-pad' />
                <TouchableOpacity
                    style={{ backgroundColor: '#E1B87A', height: 42, borderRadius: 21, width: 200, elevation: 2, alignSelf: 'center', marginTop: 50, alignItems: 'center', justifyContent: 'center' }} activeOpacity={0.8} onPress={() => props.navigation.navigate('OTPScreen2')}>
                    <Text style={{ textTransform: 'capitalize', color: '#FFF', fontSize: 16, fontWeight: '700', letterSpacing: 1.25 }}>Proceed</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}