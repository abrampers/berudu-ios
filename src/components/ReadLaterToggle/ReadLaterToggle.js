import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const READ_LATER_ENABLED_ICON = require('../../assets/article-card-icons/add-to-reading-list/enabled/icon.png');
const READ_LATER_DISABLED_ICON = require('../../assets/article-card-icons/add-to-reading-list/disabled/icon.png');

class ReadLaterToggle extends React.Component {
  render() {
    const readLaterIcon = this.props.enabled ? READ_LATER_ENABLED_ICON : READ_LATER_DISABLED_ICON;

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
            <Image source={readLaterIcon} />
          </View>
          <View>
            {this.props.enabled &&
              <Text
                style={{
                  fontFamily: 'System', 
                  fontWeight: '500', 
                  marginLeft: 12, 
                  textAlign: 'right', 
                  fontSize: 11, 
                  color: '#B2B2B2'
                }}
              >
                ADDED TO READING LIST
              </Text>
            }
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ReadLaterToggle;
