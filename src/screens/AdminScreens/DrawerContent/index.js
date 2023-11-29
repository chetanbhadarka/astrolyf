import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';

import { useDispatch } from 'react-redux'
import { userActions } from '../../../redux/actions'

export default function index(props) {

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={{
            flex: 1,
            borderTopEndRadius: 10,
            borderBottomEndRadius: 10,
            backgroundColor: '#DEE4F2',
            overflow: 'hidden',
        }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}>

                {/* Drawer Header */}
                <Text style={{
                    color: '#A38249',
                    height: 48,
                    fontSize: 24,
                    fontWeight: '700',
                    letterSpacing: 0.5,
                    alignSelf: 'center',
                    textAlign: "center",
                    textAlignVertical: 'center',
                }}>
                    AstroLyf
                </Text>

                {/* Image Header */}
                <View style={{
                    height: 180,
                    padding: 10,
                    flexDirection: 'row',
                    backgroundColor: "#E1B87A",
                    elevation: 2,
                }}>
                    <View style={{
                        borderRadius: 60,
                        alignSelf: 'flex-end',
                        backgroundColor: "#FFF",
                        elevation: 5,
                    }}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150' }}
                            style={{
                                height: 120,
                                width: 120,
                                borderRadius: 60
                            }} />
                    </View>
                    <View style={{ paddingLeft: 10, justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 22, fontWeight: '700', color: '#FFF' }}>Admin</Text>
                    </View>
                </View>
            </ScrollView>
            <Text style={{
                color: '#000000',
                height: 30,
                fontSize: 18,
                fontWeight: '700',
                marginVertical: 5,
                letterSpacing: 0.5,
                borderTopWidth: 1,
                borderTopColor: '#808080',
                textAlign: 'center',
                textAlignVertical: 'center',
                textTransform: 'uppercase',
            }}
                onPress={() => dispatch(userActions.logout())}>
                Log Out
            </Text>
        </SafeAreaView>
    )
}