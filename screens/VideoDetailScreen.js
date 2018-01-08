import React from 'react';
import { Button } from 'react-native';

export default class VideoDetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.video.get("name"),
  });
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back"
        onPress={() => goBack()}
      />
    );
  }
}
