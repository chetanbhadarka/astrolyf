import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {CustomHeader} from '../../../components';
import {CustomLoader} from '../../../components';
import {Icons} from '../../../assets';
import {AppService} from '../../../services';
import {VALID_RESPONSE} from '../../../constants';
import Snackbar from 'react-native-snackbar';

const appService = new AppService();

export default function index(props) {
  const data = [0, 1, 2];
  const CarouselWidth = Dimensions.get('window').width;
  const CarouselHeigth = 200;
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [userPostList, setUserPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    let response = await appService.getUserPostVideo();
    if (response && response.status === VALID_RESPONSE.STATUS_ID) {
      //   Snackbar.show({
      //     text: 'Astrologer fetched successfully',
      //     duration: Snackbar.LENGTH_LONG,
      //     backgroundColor: 'green',
      //   });
      setUserPostList(response.data);
      //   setLoading(false);
    } else {
      //   Snackbar.show({
      //     text: 'Something went wrong!',
      //     duration: Snackbar.LENGTH_LONG,
      //     backgroundColor: 'red',
      //   });
      //   setLoading(false);
    }
    // setLoading(false);
  }, []);

  renderItem = ({item, index}) => {
    return (
      <View
        style={{
          height: CarouselHeigth,
          width: CarouselWidth,
          padding: 20,
        }}>
        <View
          style={{
            overflow: 'hidden',
            borderRadius: 10,
            backgroundColor: '#FFF',
            elevation: 8,
          }}>
          <Image
            // source={{ uri: `https://picsum.photos/${CarouselWidth - 40}/${CarouselHeigth - 40}` }}
            source={{uri: `https://picsum.photos/300/160`}}
            style={{
              width: CarouselWidth - 40,
              height: CarouselHeigth - 40,
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Custom Header */}
      <CustomHeader {...props} />

      {/* Main Content */}
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
        showsVerticalScrollIndicator={false}>
        {/* <View>
          <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={CarouselWidth}
            sliderHeight={CarouselHeigth}
            itemWidth={CarouselWidth}
            itemHeight={CarouselHeigth}
            autoplay
            onSnapToItem={setActiveDotIndex}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeDotIndex}
            containerStyle={{
              position: 'absolute',
              alignSelf: 'center',
              bottom: 0,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotStyle={{
              backgroundColor: '#DFDFDF',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View> */}

        <View>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              marginVertical: 5,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                elevation: 8,
                borderRadius: 10,
                padding: 10,
                flex: 1 / 2,
                marginRight: 5,
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('UserHoroscopeScreen')}>
              <Image
                source={Icons.Horoscope}
                style={{height: 60, width: 60, marginVertical: 10}}
              />
              <Text style={{fontWeight: '700', color: '#707070'}}>
                {'Horoscope'}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#DEDEDE',
                  width: '100%',
                  marginVertical: 2,
                }}
              />
              <Text
                style={{fontSize: 10, color: '#707070', textAlign: 'center'}}>
                {'Daily / Weekly / Yearly'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                elevation: 8,
                borderRadius: 10,
                padding: 10,
                flex: 1 / 2,
                marginLeft: 5,
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={() =>
                props.navigation.navigate('UserTalkToAstroScreen')
              }>
              <Image
                source={Icons.TalkToAstro}
                style={{height: 60, width: 60, marginVertical: 10}}
              />
              <Text style={{fontWeight: '700', color: '#707070'}}>
                {'Talk to Astrologer'}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#DEDEDE',
                  width: '100%',
                  marginVertical: 2,
                }}
              />
              <Text
                style={{fontSize: 10, color: '#707070', textAlign: 'center'}}>
                {'starting from ₹5/min only{`\n`}(first minute is not charged)'}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              marginVertical: 5,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                elevation: 8,
                borderRadius: 10,
                padding: 10,
                flex: 1 / 2,
                marginRight: 5,
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('UserKundaliScreen')}>
              <Image
                source={Icons.DetailedReport}
                style={{height: 60, width: 60, marginVertical: 10}}
              />
              <Text style={{fontWeight: '700', color: '#707070'}}>
                {'Get Detailed Report'}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#DEDEDE',
                  width: '100%',
                  marginVertical: 2,
                }}
              />
              <Text
                style={{fontSize: 10, color: '#707070', textAlign: 'center'}}>
                {
                  'starting from ₹300 only{`\n`}(Manually prepared by Astrologer)'
                }
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                elevation: 8,
                borderRadius: 10,
                padding: 10,
                flex: 1 / 2,
                marginLeft: 5,
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('UserCommunityScreen')}>
              <Image
                source={Icons.CommunityJoin}
                style={{height: 60, width: 60, marginVertical: 10}}
              />
              <Text style={{fontWeight: '700', color: '#707070'}}>
                {'Join Our Community'}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#DEDEDE',
                  width: '100%',
                  marginVertical: 2,
                }}
              />
              <Text
                style={{fontSize: 10, color: '#707070', textAlign: 'center'}}>
                {'starting from ₹499 only{`\n`}(Get Free Callback Request)'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {userPostList && (
          <View
            style={{
              backgroundColor: '#E1B87A',
              padding: 16,
              margin: 16,
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#fff',
              }}>
              {'POSTS & VIDEOS'}
            </Text>
          </View>
        )}
        <View
          style={{
            paddingHorizontal: 16,
          }}>
          {userPostList?.thought && (
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#E1B87A',
              }}>
              {'THOUGHT :-'}
            </Text>
          )}
          {userPostList?.thought && <Text>{userPostList.thought}</Text>}
          {userPostList?.videoLink && (
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#E1B87A',
                marginTop: 16,
              }}>
              {'VIDEO :-'}
            </Text>
          )}
          {userPostList?.videoLink && (
            <Text onPress={() => Linking.openURL(userPostList?.videoLink)}>
              {userPostList.videoLink}
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
