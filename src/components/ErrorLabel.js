import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ErrorLabel = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'red',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  message: {
    color: 'red',
  },
});

export default ErrorLabel;
