import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Styles';
import Header from '../Header/Header';
import FeedView from '../../containers/FeedView/FeedView';

class FeedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <Header />
        <FeedView style={{ flex: 1, }}/>
      </View>
    );
  }
}

export default FeedScreen;
