import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS, Image } from 'react-native';

import styles from './Styles'

class FeedList extends React.Component {
  render() {
    return (
      <View>
        <View
          style={styles.titleContainer}
        >
          <Image
            source={require('../../assets/navigation-bar-icons/title/icon.png')}
            style={styles.titleImage}
          />
        </View>
        <View>
          <Text>feed feed feed</Text>
        </View>
      </View>
    );
  }
}

class FeedScreen extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FeedList,
          title: '',
        }}
        navigationBarHidden={true}
        barTintColor={'white'}
        translucent={false}
        style={{flex: 1}}
      />
    );
  }
}

export default FeedScreen;
