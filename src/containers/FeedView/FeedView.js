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
          date: '20 MINUTES',
          read: false,
          readLater: false,
          uri: 'https://deepmind.com/blog/neural-scene-representation-and-rendering/',
          imageUri: 'https://storage.googleapis.com/deepmind-live-cms/images/Image_%2520NeuralSceneRendering_RGB_16_9_TICC2u7.width-800.jpg',
        },
        {
          key: '1',
          title: 'Learning Dexterity',
          author: 'OpenAI Blog',
          date: '12 HOURS',
          read: false,
          readLater: false,
          uri: 'https://blog.openai.com/learning-dexterity/',
          imageUri: 'https://blog.openai.com/content/images/2018/07/195A4726-2.jpg',
        },
        {
          key: '2',
          title: 'Tesla Roadster is ’embarrassing’ us, says supercar maker Koenigsegg',
          author: 'Elektek.co',
          date: '16 HOURS',
          read: false,
          readLater: false,
          uri: 'https://electrek.co/2018/09/01/tesla-roadster-embarrassing-supercar-maker-koenigsegg/',
          imageUri: 'https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2017/11/roadster_rear_341.jpg?resize=2000%2C0&quality=82&strip=all&ssl=1',
        },
        {
          key: '3',
          title: 'Pencak Silat, dari Sukarno hingga Jokowi',
          author: 'detikX',
          date: '19 HOURS',
          read: false,
          readLater: false,
          uri: 'https://x.detik.com/detail/investigasi/20180903/Pencak-Silat/index.php',
          imageUri: 'https://x.detik.com/detail/investigasi/20180903/Pencak-Silat/images/jokowi,-prabowo-xwwg6y.png',
        },
        {
          key: '4',
          title: 'Sunsetting React Native',
          author: 'Airbnb Engineering & Data Science',
          date: '2 DAYS',
          read: false,
          readLater: false,
          uri: 'https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a',
          imageUri: 'https://cdn-images-1.medium.com/max/2000/1*8c-9hgBkRGcllO9CHcTzbQ.jpeg',
        },
        {
          key: '5',
          title: 'From an internship to a GO-JEK employee',
          author: 'GO-JEK Engineering Blog',
          date: '1 WEEK',
          read: false,
          readLater: true,
          uri: 'https://blog.gojekengineering.com/from-an-internship-to-a-go-jek-employee-3252e927def',
          imageUri: 'https://cdn-images-1.medium.com/max/2000/1*gGuuOvOIK9zaKBw5SudzCA.jpeg',
        },
        {
          key: '6',
          title: 'Learning with Privacy at Scale',
          author: 'Apple Machine Learning Journal',
          date: '2 WEEKS',
          read: false,
          readLater: false,
          uri: 'https://machinelearning.apple.com/2017/12/06/learning-with-privacy-at-scale.html',
          imageUri: 'https://machinelearning.apple.com/images/journals/personalized-hey-siri/hero_siri_2x.png',
        },
      ]
    };
  };

  handleCardPress = (itemKey) => {

    // TODO: call API to mark item as read

    Linking.openURL(this.state.data[itemKey].uri);

    const newData = Object.assign([], this.state.data);
    newData[itemKey].read = true;
    this.setState({data: newData});
  }

  handleReadLaterPress = (itemKey) => {

    // TODO: call API to add item to reading list

    this.setState((state, props) => {
      const newData = Object.assign([], state.data);
      newData[itemKey].readLater = !state.data[itemKey].readLater;
      return { data: newData };
    });
  }

  namafungsi = () => {
    console.log('lalalala jing');
  }

  render() {
    return (
      <FeedContent
        data={ this.state.data }
        handleCardPress={ this.handleCardPress }
        handleReadLaterPress={ this.handleReadLaterPress }
        onUpdate={ () => namafungsi() }
      />
    );
  }
}
