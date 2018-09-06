import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Styles'
import Header from '../Header/Header'

class FeedScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <FeedView />
      </View>
    );
  }
}

export default FeedScreen;
