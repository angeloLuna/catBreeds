import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import colors from '../constants/colors';

const Map = ({region}) => {
  const alignMarker = () => {
    return {
      ...region,
      latitude: region.latitude - 1.5,
    };
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        initialRegion={region}
        maxZoomLevel={3}>
        <Marker coordinate={alignMarker()}>
          <View style={styles.marker}>
            <Image
              style={styles.markerImg}
              source={require('../assets/img/cat.png')}
            />
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.pink,
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    height: 300,
    width: 300,
  },
  marker: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgPink,
    borderColor: colors.pink,
    borderWidth: 2,
    borderRadius: 50,
  },
  markerImg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  card: {
    width: 300,
  },
});

export default Map;
