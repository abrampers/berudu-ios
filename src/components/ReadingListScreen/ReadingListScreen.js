import React from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';

import styles from './Styles';
import ReadingListPage from '../../containers/ReadingListPage/ReadingListPage'


class ReadingListView extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return(
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            width: screenWidth,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Text>lallala</Text>
        </View>

        <View
          style={{
            width: screenWidth,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Text>lilililil</Text>
        </View>
      </ScrollView>
    );
  }
}

class ReadingListScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F4F4F4',
        }}
      >
        <ReadingListPage />
      </View>
    );
  }
}

export default ReadingListScreen;
