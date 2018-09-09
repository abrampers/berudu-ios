import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import CardThumbnail from '../CardThumbnail/CardThumbnail'
import ReadLaterToggle from '../ReadLaterToggle/ReadLaterToggle'

class FeedCard extends React.Component {
  clippedTitle() {
    const maxLength = 18;
    const words = this.props.title.split(' ');
    let title = '';
    let row = 1;
    let rowLength = 0;
    let i;
    for (i = 0; i < words.length; i++) {
      if (words[i].length < maxLength - rowLength) {
        rowLength += words[i].length + 1;
        title += words[i] + ' ';
      } else {
        if (row < 3) {
          row += 1;
          rowLength = words[i].length + 1;
          title += words[i] + ' ';
        } else {
          title += '...';
          return title;
        }
      }
    }
    return this.props.title;
  }

  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress}>
        <View
          style={{ 
            flexDirection: 'row', 
            backgroundColor: 'white', 
            borderRadius: 12, 
            marginLeft: 48, 
            marginRight: 14, 
            marginTop: this.props.isFirst ? 10 : 5, 
            marginBottom: this.props.isLast ? 10 : 5, 
            height: 154, 
            flex: 1, 
            alignItems: 'center', 
            shadowOpacity: 0.08, 
            shadowOffset: { width: 0, height: 4 }, 
            shadowRadius: 16
          }}
        >
          <View
            style={{
              left: -34,
              zIndex: 1
            }}
          >
            <CardThumbnail 
              imageUri={this.props.imageUri} 
              faded={this.props.read}
            />
          </View>
          <View
            style={{
              flexDirection: 'column', 
              flex: 1, 
              marginLeft: 0,
              justifyContent: 'center', 
              position: 'relative', 
              left: -18,
              height: 154,
            }}
          >
            <View
              style={{
                position: 'absolute', 
                right: -16,
                top: 5
              }}
            >
              {!this.props.read && 
                <ReadLaterToggle
                  enabled={this.props.readLater}
                  onPress={() => { this.props.handleReadLaterPress(this.props.itemKey); }}
                />
              }
            </View>
            <Text 
              style={{
                fontFamily: 'System', 
                fontWeight: '700',
                textAlign: 'left', 
                fontSize: 20, 
                fontWeight: 'bold', 
                color: '#454F53', 
                marginBottom: 2 
              }}
            >
              {this.clippedTitle()}
            </Text>
            <Text 
              style={{ 
                fontFamily: 'System', 
                fontWeight: '600', 
                fontStyle: 'italic', 
                textAlign: 'left', 
                fontSize: 12, 
                fontStyle: 'italic', 
                color: '#78849E', 
                marginBottom: 2 
              }}
            >
              {this.props.author}
            </Text>
            <Text 
              style={{
                fontFamily: 'System', 
                fontWeight: '500', 
                marginLeft: 12, 
                textAlign: 'right', 
                fontSize: 14, 
                color: '#696969', 
                position: 'absolute', 
                bottom: 12, 
                right: 0
              }}
            >
              {this.props.date}
            </Text>
          </View>
          {this.props.read &&
            <View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                borderRadius: 12,
                backgroundColor: 'white',
                opacity: 0.7
              }}
            />
          }
        </View>
      </TouchableOpacity>
    );
  }
}

function renderFeedCard(item, listLength, onPress, handleReadLaterPress) {
  return (
    <FeedCard
      uri={item.item.uri}
      imageUri={item.item.imageUri}
      title={item.item.title}
      author={item.item.author}
      date={item.item.date}
      itemKey={item.item.key}
      isFirst={item.item.key == 0}
      isLast={item.item.key == listLength - 1}
      read={item.item.read}
      readLater={item.item.readLater}
      onPress={() => onPress(item.item.key)}
      handleReadLaterPress={handleReadLaterPress}
    />
  );
}

export default renderFeedCard;
