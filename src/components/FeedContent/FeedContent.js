import React from 'react';
import { ScrollView, FlatList, View } from 'react-native';

import renderFeedCard from '../FeedCard/FeedCard'

export default class FeedContent extends React.Component {
  render() {
    return(
      <View style={{ backgroundColor: '#F4F4F4', flex: 1, paddingTop: 6 }} >
        <FlatList
          numColumns={ 1 }
          data={ this.props.data }
          renderItem={ (item) => (renderFeedCard(item, this.props.onCardPress)) }
          onRefresh={ this.props.onRefresh }
        />
      </View>
    );
  }
}
