import React from 'react';
import { ScrollView, FlatList, View } from 'react-native';

import renderFeedCard from '../FeedCard/FeedCard'

export default class FeedContent extends React.Component {
  render() {
    return(
      <View
        style={{
          backgroundColor: '#F4F4F4',
          flex: 1
        }}
      >
        <FlatList
          numColumns={1}
          data={this.props.data}
          renderItem={(item) => (renderFeedCard(
            item, 
            this.props.data.length, 
            this.props.handleCardPress, 
            this.props.handleCardReadLaterPress,
            this.props.handleCardClearPress,
            this.props.handleCardUnreadPress,
          ))}
          onRefresh={this.props.onRefresh}
          refreshing={this.props.refreshing}
        />
      </View>
    );
  }
}
