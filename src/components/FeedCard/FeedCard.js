import React from 'react';
import { View, Image, Text, TouchableOpacity, Animated } from 'react-native';

import CardThumbnail from '../CardThumbnail/CardThumbnail'
import ReadLaterToggle from '../ReadLaterToggle/ReadLaterToggle'
import ClearButton from '../ClearButton/ClearButton'
import UnreadButton from '../UnreadButton/UnreadButton'

const CLEAR_ICON = require('../../assets/article-card-icons/clear/icon.png');
const UNREAD_ICON = require('../../assets/article-card-icons/unread/icon.png');

const ROW_HEIGHT = 70;

class FeedCard extends React.Component {
  constructor(props) {
    super(props);

    this.scaleAnimation = new Animated.Value(1);
    this.heightAnimation = new Animated.Value(154);
  }

  onClearPress = () => {
    Animated.timing(
      this.scaleAnimation,
      {
        toValue: 0,
        duration: 350,
      }
    ).start(() => this.props.onRemove());
    Animated.timing(
      this.heightAnimation,
      {
        toValue: 0,
        duration: 350,
      }
    ).start();
  };

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
        <Animated.View
          style={{
            transform: [{scale: this.scaleAnimation}],
            height: this.heightAnimation,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 12,
              marginLeft: 48,
              marginRight: 14,
              marginTop: 5,
              marginBottom: 5,
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
              <Text
                style={{
                  fontFamily: 'System',
                  fontWeight: '700',
                  textAlign: 'left',
                  fontSize: 20,
                  // fontWeight: 'bold',
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
                  fontWeight: '600',
                  textAlign: 'right',
                  fontSize: 13,
                  color: '#B2B2B2',
                  position: 'absolute',
                  bottom: 8,
                  right: -7
                }}
              >
                {this.props.date}
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                right: 2,
                top: 5
              }}
            >
              <ReadLaterToggle
                enabled={this.props.readLater}
                onPress={this.props.onReadLaterPress}
              />
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

function renderFeedCard(item, listLength, onPress, onReadLaterPress) {
  return (
    <FeedCard
      uri={item.item.uri}
      imageUri={item.item.imageUri}
      title={item.item.title}
      author={item.item.author}
      date={item.item.date}
      itemKey={item.item.key}
      readLater={item.item.readLater}
      onPress={() => onPress(item.item.key)}
      onReadLaterPress={() => onReadLaterPress(item.item.key)}
    />
  );
}

export default renderFeedCard;
