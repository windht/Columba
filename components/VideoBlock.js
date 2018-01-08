import React from 'react';
import { Dimensions,View,Text,Image,TouchableHighlight,StyleSheet } from 'react-native';

export class VideoBlock extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onPress.bind(this)}>
          <View>
            <Image style={styles.image} source={{uri: this.props.video.get("thumbnail")}} />
            <Text>{this.props.video.get("name")}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    width: Dimensions.get('window').width / 2,
    padding:10
  },
  image:{
    height:100,
    width:Dimensions.get('window').width / 2 - 20
  }
})
