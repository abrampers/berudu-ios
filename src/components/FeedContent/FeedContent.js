import React from 'react';
import { ScrollView } from 'react-native';

import renderCard from '../Card/Card'

export default class FeedContent extends React.Component {
  render() {
    return(
      <FlatList
        numColumns={ 1 }
        data={ this.props.data }
        renderItem={ (item) => (renderCard(item)) }
        onRefresh={ this.props.onRefresh }
      }
      />
    );
  }
}
