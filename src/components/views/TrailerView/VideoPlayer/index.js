import React, { Component } from 'react';
import { View } from 'react-native';
import YouTube from 'react-native-youtube'

import { youtubeApiKey } from '../../../../utils/constants'

class VideoPlayer extends Component {

  render (){
    return (
      <View>
        <YouTube
          apiKey={youtubeApiKey}
          videoId={this.props.trailer}
          play={true}
          fullscreen={true}
          controls={1}
          style={{ alignSelf: 'stretch', height:150 }}
        />
      </View>
    )
  }
}

export default VideoPlayer