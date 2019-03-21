import React from 'react';
import { View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

export const ChangeViewButton = ({changeView, itemNumbersByLine}) => {

  const image = itemNumbersByLine === 1 ? require('../../../../../assets/images/list-view.png') : require('../../../../../assets/images/grid-view.png');
  return (
    <View style={styles.wrapperStyle}>
      <TouchableOpacity onPress={changeView}>
        <Image
          source={image}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  )
};


const styles = StyleSheet.create({
  wrapperStyle: {
    marginRight: 10,
    flexDirection:'row',
    justifyContent: 'flex-end',
    flexWrap:'wrap'
  },
  imageStyle: {
    width: 30,
    height: 30
  }
})