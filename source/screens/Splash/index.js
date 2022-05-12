import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import UseSplash from './UseSplash';

const Splash = ({navigation}) => {
  const {fetchData} = UseSplash({navigation});

  useEffect(() => {
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
