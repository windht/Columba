import React from 'react';
import { View,Text,Image } from 'react-native';

export class VideoBlock extends React.Component {
  render() {
    return (
      <View>
        <Image source={{uri: this.props.video.get("thumbnail")}} style={{width: 400, height: 400}} />
        <Text>{this.props.video.get("name")}</Text>
      </View>
    )
  }
}
