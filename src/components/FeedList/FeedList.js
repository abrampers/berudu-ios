import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Styles'
import Header from '../Header/Header'

class FeedList extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <View>
          <Text style={styles.center} >
            feed feed feed
          </Text>
        </View>
      </View>
    );
  }
}

export default FeedList;
