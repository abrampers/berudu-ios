import React from 'react';
import { View, Image } from 'react-native';

class CardThumbnail extends React.Component {
  render() {    
    return (
      <View>
        <View
          style={{
            shadowOpacity: 0.16, 
            shadowOffset: { width: 0, height: 4 }, 
            shadowRadius: 16,
            borderRadius: 12,
          }}
        >
          <Image
            style={{
              width: 126, 
              height: 126,
              borderRadius: 12,
              backgroundColor: 'gray'
            }}
            source={{uri: this.props.imageUri}}
          />
            {this.props.faded && 
            <View
              style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 126, 
                  height: 126,
                  borderRadius: 12,
                  backgroundColor: 'white',
                  opacity: 0.7
                }}
            />
          }
        </View>
      </View>
    );
  }
}

export default CardThumbnail;
