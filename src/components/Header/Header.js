import React from 'react';
import { View, Image } from 'react-native';

import styles from './Styles';

export default class Header extends React.Component {
  render() {
    return (
      <View
        style={styles.headerContainer}
      >
        <Image
          source={require('../../assets/navigation-bar-icons/title/icon.png')}
          style={styles.headerImage}
        />
      </View>
    );
  }
}
