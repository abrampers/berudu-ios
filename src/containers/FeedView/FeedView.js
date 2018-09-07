import React from 'react';
import { Linking } from 'react-native';
import update from 'immutability-helper';

import FeedContent from '../../components/FeedContent/FeedContent';

export default class FeedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: '0',
          title: 'Neural scene representation and rendering',
          author: 'Deepmind Blog',
          date: '2 HRS',
          readLater: false,
          uri: 'https://deepmind.com/blog/neural-scene-representation-and-rendering/',
          imageUri: 'https://storage.googleapis.com/deepmind-live-cms/images/Image_%2520NeuralSceneRendering_RGB_16_9_TICC2u7.width-800.jpg',
        },
        {
          key: '1',
          title: 'Learning Dexterity',
          author: 'OpenAI Blog',
          date: '12 HRS',
          readLater: false,
          uri: 'https://blog.openai.com/learning-dexterity/',
          imageUri: 'https://blog.openai.com/content/images/2018/07/195A4726-2.jpg',
        },
        {
          key: '2',
          title: 'Tesla Roadster is ’embarrassing’ us, says supercar maker Koenigsegg',
          author: 'Elektek.co',
          date: '16 HRS',
          readLater: false,
          uri: 'https://electrek.co/2018/09/01/tesla-roadster-embarrassing-supercar-maker-koenigsegg/',
          imageUri: 'https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2017/11/roadster_rear_341.jpg?resize=2000%2C0&quality=82&strip=all&ssl=1',
        },
        {
          key: '3',
          title: 'Pencak Silat, dari Sukarno hingga Jokowi',
          author: 'detikX',
          date: '19 HRS',
          readLater: false,
          uri: 'https://x.detik.com/detail/investigasi/20180903/Pencak-Silat/index.php',
          imageUri: 'https://x.detik.com/detail/investigasi/20180903/Pencak-Silat/images/jokowi,-prabowo-xwwg6y.png',
        },
      ]
    };
  };

  onCardPress = (uri) => {
    Linking.openURL(uri);
  }

  onReadLaterPress = (itemKey) => {
    this.setState((state, props) => ({
      data: update(state.data, {itemKey: {readLater: {$set: !state.data[itemKey].readLater}}})
    }));
  }

  namafungsi = () => {
    console.log('lalalala jing');
  }

  render() {
    return (
      <FeedContent
        data={ this.state.data }
        onCardPress={ this.onCardPress }
        onReadLaterPress={ this.onReadLaterPress }
        onUpdate={ () => namafungsi() }
      />
    );
  }
}
