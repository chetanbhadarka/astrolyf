import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {CustomHeader} from '../../../components';

export default function index(props) {
  const communityData = [
    {name: 'Brahmin', url: 'https://i.pravatar.cc/150'},
    {name: 'hindu', url: 'https://i.pravatar.cc/150'},
    {name: 'muslim', url: 'https://i.pravatar.cc/150'},
    {name: 'sikh', url: 'https://i.pravatar.cc/150'},
    {name: 'christian', url: 'https://i.pravatar.cc/150'},
    {name: 'jain', url: 'https://i.pravatar.cc/150'},
    {name: 'buddhist', url: 'https://i.pravatar.cc/150'},
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1 / 3,
          alignItems: 'center',
          marginVertical: 10,
        }}
        key={index}
        activeOpacity={0.85}
        onPress={() =>
          props.navigation.navigate('UserChatScreen', {headername: item.name})
        }>
        <Image
          source={{uri: item.url}}
          style={{height: 80, width: 80, borderRadius: 40}}
        />
        <Text
          style={{
            textTransform: 'capitalize',
            color: '#000',
            marginTop: 5,
            fontWeight: '700',
            letterSpacing: 0.25,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Custom Header */}
      <CustomHeader {...props} />

      {/* Main Content */}
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}>
          <Entypo
            name="chevron-left"
            size={34}
            color="#E1B87A"
            onPress={() => props.navigation.goBack()}
            style={{position: 'absolute', left: 10}}
          />
          <Text
            style={{
              color: '#E1B87A',
              fontSize: 20,
              fontWeight: '700',
              letterSpacing: 1,
            }}>
            {'Community'}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            marginHorizontal: 30,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              height: 40,
              paddingHorizontal: 20,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FFF',
              elevation: 5,
            }}>
            <TextInput
              placeholder="Search Community"
              placeholderTextColor={'grey'}
              style={{color: 'black'}}
            />
            <FontAwesome name="search" color="#000" size={20} />
          </View>

          <FontAwesome5
            name="user-shield"
            size={26}
            color="#808080"
            style={{marginLeft: 10}}
            onPress={() => props.navigation.navigate('UserFormsScreen')}
          />
        </View>

        <>
          <FlatList
            contentContainerStyle={{
              margin: 20,
              marginTop: 0,
              padding: 10,
              borderRadius: 20,
              overflow: 'hidden',
              backgroundColor: '#FFF',
              elevation: 4,
            }}
            horizontal={false}
            numColumns={3}
            key={1}
            data={communityData}
            extraData={communityData}
            renderItem={({item, index}) => renderItem({item, index})}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </>
      </View>
    </SafeAreaView>
  );
}
