import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { CustomHeader } from '../../../components'

export default function index(props) {
    return (
        <View style={{ flex: 1 }}>

            {/* Custom Header */}
            <CustomHeader {...props} />

            {/* Main Content */}
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, padding: 20, }}
                showsVerticalScrollIndicator={false}>

                <Text style={{ alignSelf: 'center', color: '#000', fontSize: 24, fontWeight: '700', borderBottomWidth: 2, borderBottomColor: '#000' }}>{'Terms & Conditions'}</Text>

                <Text style={{ fontSize: 18, color: '#000', fontWeight: '700', marginTop: 20 }}>Heading 1</Text>
                <Text style={{ color: '#000' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                <Text style={{ fontSize: 18, color: '#000', fontWeight: '700', marginTop: 20 }}>Heading 2</Text>
                <Text style={{ color: "#000" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

            </ScrollView>

        </View>
    )
}