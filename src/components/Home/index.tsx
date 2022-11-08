import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import ProductCol from './ProductCol';
import Product from './ProductCol';
import ProductRow from './ProductRow';
import styles from './style';
const Home = () => {
  return (
    <View style={styles.app}>
      <View style={styles.banner}>
        <Text style={styles.TextHeader}>Diabetes Care</Text>
        <ImageBackground
          source={{
            uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
          }}
          style={styles.imgBanner}></ImageBackground>
      </View>

      <Text style={styles.TextHeader}>All products</Text>
      <ProductRow></ProductRow>
      <ProductCol></ProductCol>
    </View>
  );
};

export default Home;
