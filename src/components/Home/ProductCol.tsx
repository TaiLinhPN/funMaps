import React from 'react';
import {Button, Image, ScrollView, Text, View} from 'react-native';
import styles from './style';
const ProductCol = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Detail')}
          />
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductCol;
