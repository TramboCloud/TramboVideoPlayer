import React, { useState, Component } from 'react';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import { Dropdown } from 'react-native-material-dropdown';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';



export default function App() {

  let data = [{
      value: '360p',
    }, {
      value: '480p',
    }, {
      value: '720p',
    }, {
      value: '1080p'
    }];

  let selected_resolution = '720p'

  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Text>TramboTube Premium</Text>
        </View>
        <View style={{flex: 7, backgroundColor: 'skyblue'}} >
        <VideoPlayer
          style={styles.backgroundVideo}
          source={{ uri: 'https://d295x101df47z9.cloudfront.net/bmx/bmx-'+selected_resolution+'.mp4' }}
        />
        </View>
        <View style={{flex: 2, backgroundColor: 'powderblue'}} >
        <Dropdown
          label='Resolution'
          data={data}
        />
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
