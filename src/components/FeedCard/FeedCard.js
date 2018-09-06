import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './Styles'

class FeedCard extends React.Component {
  render() {
    return(
      <TouchableOpacity onPress={ this.props.onPress }>
        <View
          style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 12, marginLeft: 50, marginRight: 16, marginTop: 7, marginBottom: 7, height: 154, flex: 1, alignItems: 'center', shadowOpacity: 0.08, shadowOffset: { width: 0, height: 4 }, shadowRadius: 16 }}
        >
          <View
            style={{ shadowOpacity: 0.16, shadowOffset: { width: 0, height: 4 }, shadowRadius: 16 }}
          >
            <Image
              style={{width: 126, height: 126, borderRadius: 12, position: 'relative', left: -34, }}
              source={{ uri: this.props.uri }}
            />
          </View>
          <View
            style={{ flexDirection: 'column', flex: 1, marginLeft: 0, justifyContent: 'center', position: 'relative', left: -18, height: 154 }}
          >
            <Text style={{ fontFamily: 'System', fontWeight: '700',  textAlign: 'left', fontSize: 20, fontWeight: 'bold', color: '#454F53', marginBottom: 2 }}>
              {this.props.title}
            </Text>
            <Text style={{ fontFamily: 'System', fontWeight: '600', fontStyle: 'italic' ,  textAlign: 'left', fontSize: 12, fontStyle: 'italic', color: '#78849E', marginBottom: 2 }}>
              {this.props.author}
            </Text>
            <Text style={{ fontFamily: 'System', fontWeight: '500', marginLeft: 10, textAlign: 'right', fontSize: 16, color: '#696969', position: 'absolute', bottom: 14, right: 0  }}>
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
