import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const Header = () => {

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.pinimg.com/originals/5c/b9/18/5cb918952f184853961ea83597082f38.png' }} style={{ height: 100, width: 100 }} />
      <Text style={styles.text}>Breeds</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 40,
  }
})

export default Header