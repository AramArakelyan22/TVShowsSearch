import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import ShowListItem from '../../../common/ShowListItem';


export const ShowList = ({tvShows, onPress, itemNumbersByLine}) => {

  const renderListItem = ({item}) => (
    <ShowListItem
      onPress={onPress}
      itemNumbersByLine={itemNumbersByLine}
      {...item}
    />
  );

  return (
    <View style={styles.wrapperStyle}>
      <FlatList
        key={itemNumbersByLine}
        data={tvShows}
        renderItem={renderListItem}
        keyExtractor={item => `${item.id}`}
        numColumns={itemNumbersByLine}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1
  }
})




