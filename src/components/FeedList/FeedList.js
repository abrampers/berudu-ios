import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Styles'

class FeedList extends React.Component {
  render() {
    return (
      <View>
        <View
          style={styles.headerContainer}
        >
          <Image
            source={require('../../assets/navigation-bar-icons/title/icon.png')}
            style={styles.headerImage}
          />
        </View>
        <View>
          <Text>feed feed feed</Text>
        </View>
      </View>
    );
  }
}

export default FeedList;