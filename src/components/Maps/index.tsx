import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import GetLocation from 'react-native-get-location';
import {Region} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: "relative",
   
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex:1
  },
});

const Maps = () => {
  const initialRegion: Region = {
    latitude: 21.017277,
    longitude: 105.841424,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [region, setRegion] = useState<Region>(initialRegion);

  useEffect(() => {
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
  }, []);

  const onRegionChange = (region: Region) => {
    setRegion(region);
  };

  console.log(region);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyAKtxHr-Xx32YorlUNJTADl3Eywse4NSM0',
          language: 'en',
        }}
        styles={{
          container: {
            height: 100,
            width: '70%',
            position: 'absolute',
            zIndex: 100,
            top: 10,
          },
          listView: {
            backgroundColor: 'white',
            color: '#000',
            width: '100%',
            height: 100,
            position: 'absolute',
            zIndex: 100,
            top: 50,
          },
        }}
      />

      <MapView
        showsUserLocation={true}
        zoomControlEnabled={true}
        zoomEnabled={true}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={region}
        onRegionChange={() => onRegionChange}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          pinColor="red">
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          radius={500}
          strokeColor={'rgba(45,137,193,0.4)'}
          strokeWidth={100}
        />
      </MapView>
    </View>
  );
};

export default Maps;
