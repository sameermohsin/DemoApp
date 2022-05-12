import React from 'react';
import {SafeAreaView} from 'react-native';
import WebScreen from '../components/WebScreen';

const Home = () => {
  return (
    <SafeAreaView>
      <WebScreen link="https://new.aaaprinterz.com/" animate={true} />
    </SafeAreaView>
  );
};

export default Home;
