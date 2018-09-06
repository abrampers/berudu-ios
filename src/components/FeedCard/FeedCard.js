import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './Styles'

class FeedCard extends React.Component {
  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress}>
        <View
          style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 12, marginLeft: 50, marginRight: 16, marginTop: 7, marginBottom: 7, height: 154, flex: 1, alignItems: 'center', overflow: 'visible' }}
        >
          <Image
            style={{ width: 126, height: 126, borderRadius: 12, position: 'relative', left: -34 }}
            source={{ uri: this.props.imageUri }}
          />
          <View
            style={{ flexDirection: 'column', flex: 1, marginRight: 15 }}
          >
            <Text style={{ fontFamily: 'System', alignSelf: 'stretch', textAlign: 'right', fontSize: 20, fontWeight: 'bold', color: '#454F53' }}>
              {this.props.title}
            </Text>
            <Text style={{ fontFamily: 'System', alignSelf: 'stretch', textAlign: 'right', fontSize: 12, fontStyle: 'italic', color: '#78849E' }}>
              {this.props.author}
            </Text>
            <Text style={{ fontFamily: 'System', marginLeft: 10, textAlignVertical: 'bottom', flex:1, alignSelf: 'stretch', fontSize: 16, color: '#696969' }}>
              {this.props.date}
            </Text>

          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

function renderFeedCard(item, onPress) {
  return(
    <FeedCard
      uri={item.item.uri}
      imageUri={item.item.imageUri}
      title={item.item.title}
      author={item.item.author}
      date={item.item.date}
      onPress={() => {onPress(item.item.uri)}}
    />
  );
}

export default renderFeedCard;
