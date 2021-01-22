import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/cat.png')} style={styles.image} />
      <Text style={styles.text}>Breeds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
  image: {
    height: 80,
    width: 80,
  },
});

export default Header;
