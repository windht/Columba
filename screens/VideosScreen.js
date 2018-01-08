import React from 'react';
import { ListView,RefreshControl,Text,ScrollView, StyleSheet } from 'react-native';
import Parse from 'parse/react-native';

import {VideoBlock} from '../components/VideoBlock';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Videos',
  };

  _onRefresh() {
    this.setState({refreshing: true});

    // 使用Parse的API获取Video的内容
    var Video = Parse.Object.extend("Video");
    var query = new Parse.Query(Video);

    //在Promise中直接将数据传入给state
    query.find().then((data) => {
      this.setState({refreshing: false});
      this.setState(
        {
          dataSource: this.state.dataSource.cloneWithRows(data)
        }
      );
    });
  }

  componentWillMount(){
    this._onRefresh();
  }

  constructor(props) {
    super(props);

    // 初始化ListView和Refresh
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows([])
    };
  }

  render() {
    return (
      <ScrollView
        {/**
         * 下拉刷新，详见文档 https://facebook.github.io/react-native/docs/refreshcontrol.html
         */}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        style={styles.container}
      >
        {/* Video Screen 内文
           * 用了一个List View,详见文档 https://facebook.github.io/react-native/docs/next/listviewdatasource.html
           * 然后内部包含的VideoBlock是自定义的，在components/VideoBlock， 传入了rowData
         */}
        <Text>Video Screen</Text>
        <ListView

          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(rowData) => <VideoBlock video={rowData}/>}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
});
