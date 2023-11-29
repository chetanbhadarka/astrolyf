import React from 'react';
import {View, Text, FlatList, TextInput, Dimensions} from 'react-native';
import SegmentedControl from 'rn-segmented-control';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {CustomHeader} from '../../../components';

export default function index(props) {
  const [tabIndex, setTabIndex] = React.useState(0);
  const data = [
    {
      type: 'team',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
      type: 'user',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
      type: 'team',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
      type: 'user',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
      type: 'user',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
      type: 'team',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
      type: 'user',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
      type: 'team',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
      type: 'user',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
      type: 'user',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
  ];

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  renderItems = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: item.type === 'team' ? 'flex-start' : 'flex-end',
          marginHorizontal: 10,
        }}>
        {item.type === 'team' ? (
          <MaterialIcons
            name="support-agent"
            size={30}
            color="#000"
            style={{marginRight: 5}}
          />
        ) : null}
        <View
          style={{
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginVertical: 8,
            backgroundColor: '#FFF',
            elevation: 2,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              width:
                Dimensions.get('screen').width -
                Dimensions.get('screen').width / 3,
            }}>
            {item.text}
          </Text>
        </View>
        {item.type === 'user' ? (
          <MaterialIcons
            name="person"
            size={30}
            color="#000"
            style={{marginLeft: 5}}
          />
        ) : null}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Custom Header */}
      <CustomHeader {...props} />

      {/* Main Content */}
      <SegmentedControl
        tabs={['Chat', 'Call']}
        containerStyle={{
          alignSelf: 'center',
          marginVertical: 10,
        }}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
      />

      {tabIndex === 0 ? (
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            extraData={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => renderItems({item, index})}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 48,
              marginVertical: 10,
              marginHorizontal: 30,
              paddingHorizontal: 30,
              borderRadius: 24,
              backgroundColor: '#FFF',
              elevation: 2,
            }}>
            <TextInput
              style={{
                paddingVertical: 0,
                color: 'black',
              }}
              placeholderTextColor={'grey'}
              underlineColorAndroid="transparent"
              placeholder="Enter Your Message"
            />
            <Ionicons name="ios-send" size={26} color="#000" />
          </View>
        </View>
      ) : (
        <View>
          <Text>Call</Text>
        </View>
      )}
    </View>
  );
}
