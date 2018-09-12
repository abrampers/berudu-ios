import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const CLEAR_ICON = require('../../assets/article-card-icons/clear/icon.png');

class ClearButton extends React.Component {
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
            <Image source={CLEAR_ICON} />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'System', 
                fontWeight: '600', 
                textAlign: 'right', 
                fontSize: 11, 
                color: '#696969',
                marginRight: -3,
              }}
            >
              CLEAR
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ClearButton;
