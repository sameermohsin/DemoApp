import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Color} from '../color/Color';

const Splash = ({navigation}) => {
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        navigation.replace('MainTabScreen');
      }, 3000);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Museum App</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
});
