import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import InputField from '../../common/InputField';
import { ShowList } from './ShowList/index';
import { ChangeViewButton } from './ChangeViewButton/index';


import { TRAILER_VIEW } from '../../../utils/constants';

import {
  fetchTvShows,
  tvShowsFetched,
  trailersFetched,
  getTvShowsTrailer,
} from "../../../actions/index";



class SearchTvShowsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemNumbersByLine: 1
    }
  }

  changeView = () => {
    this.setState( state => {
      return {
        itemNumbersByLine: state.itemNumbersByLine === 1 ? 2 : 1
      }
    })
  }

  componentWillUnmount() {
    this.props.tvShowsFetched([])
  }

  onPress = id => {
    this.props.getTvShowsTrailer(id);
    Navigation.push(this.props.componentId, {
      component: {
        name: TRAILER_VIEW,
        options: {
          topBar: {
            title: {
              text: 'Trailer'
            }
          }
        }
      }
    });
  };

  onChangeText = text => {
    this.props.fetchTvShows(text)
  };

  render() {
    const { tvShows } = this.props;
    const { itemNumbersByLine } = this.state;
    return (
      <View style={styles.wrapperStyle}>
        <InputField
          onChangeText={this.onChangeText}
          placeholder='Type to search TV Shows...'
        />
        <ChangeViewButton
          itemNumbersByLine={itemNumbersByLine}
          changeView={this.changeView} />
        <ShowList
          tvShows={tvShows}
          onPress={this.onPress}
          itemNumbersByLine={itemNumbersByLine}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1
  }
});

const stateToProps = ( {tvShows} ) => ({tvShows});

export default connect(stateToProps, {fetchTvShows, getTvShowsTrailer, trailersFetched, tvShowsFetched})(SearchTvShowsView)

