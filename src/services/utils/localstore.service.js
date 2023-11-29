import AsyncStorage from '@react-native-community/async-storage';

export class LocalstoreService {
  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
      // console.log('localstore.service _storeData : ' + JSON.stringify(error))
    }
  };

  _retrieveData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
      // console.log('localstore.service _retrieveData : ' + JSON.stringify(error));
    }
  };

  _removeData = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      // Error saving data
      // console.log('localstore.service _removeData : ' + JSON.stringify(error))
    }
  };
}
