import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { WebView } from "react-native-webview";

import { trailersFetched } from "../../../actions/index";

import VideoPlayer from './VideoPlayer';

//Here I tried to use react-native-youtube, but unfortunately it doesn't work on small screens,
// even I haven't removed id, then I used the WebView for video player.

class TrailerView extends Component {

  render() {
    const { trailer } = this.props;
    return (
      <View style={styles.wrapperStyle}>
        { trailer ?
        <WebView
            style={styles.webViewStyle}
            source={{uri: `https://www.youtube.com/watch?v=${trailer}`}}
          />
          :
          <View style={styles.textWrapperStyle}>
            <Text style={styles.textStyle}>The trailer is not found.</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    flexDirection:'column',
  },
  webViewStyle: {
    flex: 1
  },
  textWrapperStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '900',
  }
})

const mapStateToProps = ({trailer}) => ({trailer});

export default connect(mapStateToProps, {trailersFetched})(TrailerView)
