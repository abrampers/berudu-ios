import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const UNREAD_ICON = require('../../assets/article-card-icons/unread/icon.png');

class UnreadButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          style={{
            flex: 1, 
            flexDirection: 'row-reverse',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <View>
            <Image source={UNREAD_ICON} />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'System', 
                fontWeight: '600', 
                textAlign: 'right', 
                fontSize: 11, 
                color: '#696969',
                marginRight: -2,
              }}
            >
              UNREAD
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default UnreadButton;
