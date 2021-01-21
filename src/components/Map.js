import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 19.07802,
          longitude: -98.29769,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  map: {
    height: 300,
    width: 300,
  }
})

export default Map