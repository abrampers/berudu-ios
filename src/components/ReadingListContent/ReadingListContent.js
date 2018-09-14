import React from 'react';
import { ScrollView, FlatList, View } from 'react-native';

import renderReadingListCard from '../ReadingListCard/ReadingListCard'

export default class ReadingListContent extends React.Component {
  render() {
    return(
      <View
        style={{
          backgroundColor: '#F4F4F4',
          flex: 1,
          paddingBottom: 49,
        }}
      >
        <FlatList
          numColumns={1}
          data={this.props.data}
          renderItem={(item) => (renderReadingListCard(
            item,
            this.props.data.length,
            this.props.handleCardPress,
            this.props.handleCardRemove,
          ))}
          onRefresh={this.props.onRefresh}
          refreshing={this.props.refreshing}
          style={{paddingTop: 5}}
          contentInset={{bottom: 10}}
        />
      </View>
    );
  }
}
