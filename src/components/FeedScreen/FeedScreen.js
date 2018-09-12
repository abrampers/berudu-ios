import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Styles';
import FeedHeader from '../FeedHeader/FeedHeader';
import FeedView from '../../containers/FeedView/FeedView';

class FeedScreen extends React.Component {
  render() {
    return (
      <View style={{
      	flex: 1,
      }}>
        <FeedHeader
          date={this.props.date}
          newStoriesCount={this.props.newStoriesCount}
        />
        <FeedView />
      </View>
    );
  }
}

export default FeedScreen;
