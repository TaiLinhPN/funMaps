import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import GetLocation from 'react-native-get-location';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Maps = () => {
  interface Region {
    latitude: Float;
    longitude: Float;
    latitudeDelta: Float;
    longitudeDelta: Float;
  }

  const initialRegion: Region = {
    latitude: 16.0639,
    longitude: 208.2456,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [region, setRegion] = useState<Region>(initialRegion);



   GetLocation.getCurrentPosition({
     enableHighAccuracy: true,
     timeout: 15000,
   })
     .then(location => {
      setRegion({
        longitude: location.longitude,
        latitude: location.latitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
     })
     .catch(error => {
       const {code, message} = error;
       console.warn(code, message);
     });

  const onRegionChange = (region: Region) => {
    setRegion(region);
  };

  console.log(region);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={region}
        onRegionChange={() => onRegionChange}></MapView>
    </View>
  );
};

export default Maps;
function setState(arg0: {region: any}) {
  throw new Error('Function not implemented.');
}
