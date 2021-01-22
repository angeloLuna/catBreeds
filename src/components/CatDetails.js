import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import colors from '../constants/colors';

const CatDetails = ({catInfo}) => {
  return (
    <View style={styles.container}>
      {catInfo && (
        <View style={styles.content}>
          <Image style={styles.catImage} source={{uri: catInfo?.image?.url}} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{catInfo.name}</Text>
            <Text style={styles.origin}>{`From: ${catInfo.origin}`}</Text>
            <Text style={styles.description}>{catInfo.description}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: colors.pink,
    borderRadius: 10,
    padding: 10,
  },
  content: {
    marginTop: 10,
    flexDirection: 'row',
  },
  catImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  textContainer: {
    width: '60%',
  },
  name: {
    fontWeight: 'bold',
    color: colors.text,
    padding: 10,
    paddingTop: 0,
  },
  origin: {
    padding: 10,
    color: colors.text,
  },
  description: {
    color: colors.text,
    padding: 10,
  },
});

export default CatDetails;
