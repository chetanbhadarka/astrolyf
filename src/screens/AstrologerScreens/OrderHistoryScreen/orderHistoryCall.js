import React from 'react'
import { View, Text } from 'react-native'

export default function OrderHistoryCall(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#FFF', elevation: 4, borderRadius: 5, height: 48, paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#234955', fontWeight: '700', marginHorizontal: 20, }}>No Data Available</Text>
            </View>
        </View>
    )
}