import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import { imageBaseUrl, noImage } from '../../../utils/constants';

const ShowListItem = ({id, onPress, image, title, itemNumbersByLine, year}) => {

  const imagePath = image ? `${imageBaseUrl}${image}` : noImage;

  return(
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback  onPress={() => onPress(id)}>
        <View style={[styles.containerStyle,  itemNumbersByLine === 1 ? styles.listStyle : styles.gridStyle ]}>
          <View>
            <Image
              style={[styles.imageStyle,  itemNumbersByLine === 1 ? styles.imageListStyle : styles.imageGridStyle ]}
              source={{uri: imagePath}}
            />
          </View>
          <View>
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}>{year}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )};

const width = Dimensions.get('window').width;
const usageWidth = (width - 45);
const imageGridWidth = usageWidth / 2;
const imageListWidth = usageWidth * 2 / 3;
const textWidth = (width - 45) / 3;
const styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    marginTop: 15,
    padding: 5,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
  },
  imageStyle: {
    height: 240
  },

  imageGridStyle: {
    width: imageGridWidth,
  },

  imageListStyle: {
    width: imageListWidth,
  },

  containerStyle: {
    alignItems: 'center',
  },
  listStyle: {
    flexDirection: 'row',
  },
  gridStyle: {
    flexDirection: 'column',
  },
  textStyle: {
    width: textWidth,
    fontSize: 20,
    fontWeight: '900',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

export default ShowListItem