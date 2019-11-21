import React, { useState } from 'react';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };
  const onBuffer = onBuffer => {
  };
  const videoError = onBuffer => {
  };
  const var1 = "";
  return (
    <View style={{flex: 1}}>
      <VideoPlayer
        style={styles.backgroundVideo}
        source={{ uri: 'https://trambo-video.s3.amazonaws.com/video.mp4' }}
      />
    </View>
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  screen: {
      padding: 50
    },
});
