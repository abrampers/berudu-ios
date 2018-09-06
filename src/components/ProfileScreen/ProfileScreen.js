import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Styles'
import Header from '../Header/Header'

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <View>
          <Text>profile profile huyu</Text>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
