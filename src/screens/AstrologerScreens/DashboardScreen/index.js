import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { CustomHeader } from '../../../components'

export default function index(props) {
    return (
        <View style={{ flex: 1 }}>

            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Dashboard Content */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', marginVertical: 30 }}>
                    <View style={{ backgroundColor: '#6EC1CB', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name='document-text-outline' color='#FFF' size={30} />
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: '#E1B87A', height: 42, borderRadius: 21, elevation: 2, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', flex: 1, marginLeft: 10 }} activeOpacity={0.8} onPress={() => props.navigation.navigate('AstroDocumentScreen')}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: '700', letterSpacing: 1.25 }}>Upload Documents</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', marginVertical: 30 }}>
                    <View style={{ backgroundColor: '#E7603E', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name='document-text' color='#FFF' size={30} />
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: '#E1B87A', height: 42, borderRadius: 21, elevation: 2, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', flex: 1, marginLeft: 10 }} activeOpacity={0.8} onPress={() => { }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: '700', letterSpacing: 1.25 }}>Build Report Request</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}