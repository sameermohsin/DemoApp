const UseSplash = ({navigation}) => {
  const fetchData = async () => {
    setTimeout(() => {
      navigation.replace('MainTabScreen');
    }, 3000);
  };
  return {fetchData};
};
export default UseSplash;
