import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Styles'
import Header from '../Header/Header'

class ReadingListScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <View>
          <Text>reading list cuk</Text>
        </View>
      </View>
    );
  }
}

export default ReadingListScreen;
