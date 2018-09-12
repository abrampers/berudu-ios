import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Styles';
import Header from '../Header/Header';
import FeedView from '../../containers/FeedView/FeedView';

class FeedHeader extends React.Component {
  render() {
    return(
      <View
        style={{
          height: 135,
          borderBottomWidth: 1,
          borderColor: '#e5e5e5',
          //flex: 1,
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flex:1,
            flexDirection: 'column',
            position: 'absolute',
            bottom: 11,
          }}
        >
          <Text
            style={{
              fontFamily: 'System',
              fontWeight: '300',
              textAlign: 'left',
              fontSize: 16,
              color: '#555555',
              marginLeft: 23,
            }}
          >
          { this.props.date }
          </Text>

          <Text
            style={{
              fontFamily: 'System',
              fontWeight: '800',
              textAlign: 'left',
              fontSize: 40,
              color: 'black',
              marginLeft: 22,
            }}
          >
            Feed
          </Text>
        </View>

        <View
          style={{
            flex:1,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 17,
            right: 16
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 45,
              backgroundColor: 'black',
              height: 45,
              width: 45,
            }}
          >
            <Text
            style={{
              color: 'white',
              fontSize: 26,
              fontWeight: '900'
            }}
            >
              { this.props.num }
            </Text>
          </View>

          <View
            style={{
              marginLeft: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text // TODO: THIS IS REDUNDANT WITH THE ONE BELOW, FIX
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#555555',
                fontFamily: 'System',
              }}
            >
              New
            </Text>

            <Text // TODO: THIS IS REDUNDANT WITH THE ONE ABOVE, FIX
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#555555',
                fontFamily: 'System',
              }}
            >
              Stories
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

class FeedScreen extends React.Component {
  render() {
    return (
      <View style={{
      	flex: 1,
      	paddingBottom: 83
      }}>
        <FeedHeader date={ this.props.date }/>
        <FeedView />
      </View>
    );
  }
}

export default FeedScreen;
