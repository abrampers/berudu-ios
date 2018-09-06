import React from 'react';
import { Text, View, Button, Linking } from 'react-native';

import styles from './Styles'
import Header from '../Header/Header'

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <View>
          <Text>profile profile huyu</Text>
          <Button title="Click me" onPress={ ()=>{ Linking.openURL('https://google.com')}} />
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
