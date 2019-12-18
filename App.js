import React, { useState, Component } from 'react';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-trambo-video-controls';
import { Dropdown } from 'react-native-material-dropdown';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';



export default function App() {
  const [videoResolution, setVideoResolution] = useState('720p');

  const inputResolution = resolution => {
    setVideoResolution(resolution);
  };

  let data = [{
      value: '360p',
    }, {
      value: '480p',
    }, {
      value: '720p',
    }];


  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'black'}} />
        <View style={{flex: 7, backgroundColor: 'skyblue'}} >
        <VideoPlayer
          style={styles.backgroundVideo}
          disableVolume={true}
          videoPrefix={'https://d295x101df47z9.cloudfront.net/bmx/bmx-'}
          videoResolutions={data}
          videoDefaultResolution={"360p"}
          videoExtension={".mp4"}
          volume={1}
        />
        </View>
        <View style={{flex: 2, backgroundColor: 'black'}} >

        </View>
      </View>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  screen: {
      padding: 100
    },
});
