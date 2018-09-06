import React from 'react';

import FeedContent from '../../components/FeedContent/FeedContent';

export default class FeedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data = [
        {
        key: '1',
        title: 'Neural scene representation and rendering',
        author: 'Deepmind Blog',
        date: '2 HRS',
        uri: 'https://storage.googleapis.com/deepmind-live-cms/images/Image_%2520NeuralSceneRendering_RGB_16_9_TICC2u7.width-800.jpg',
      },
      {
        key: '2',
        title: 'Learning Dexterity',
        author: 'OpenAI Blog',
        date: '12 HRS',
        uri: 'https://blog.openai.com/content/images/2018/07/195A4726-2.jpg',
      },
      {
        key: '3',
        title: 'Tesla Roadster is ’embarrassing’ us, says supercar maker Koenigsegg',
        author: 'Elektek.co',
        date: '16 HRS',
        uri: 'https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2017/11/roadster_rear_341.jpg?resize=2000%2C0&quality=82&strip=all&ssl=1',
      },
      {
        key: '4',
        title: 'Pencak Silat, dari Sukarno hingga Jokowi',
        author: 'detikX',
        date: '19 HRS',
        uri: 'https://x.detik.com/detail/investigasi/20180903/Pencak-Silat/images/jokowi,-prabowo-xwwg6y.png',
      },
      ]
    };
  };

  namafungsi = () => {
    console.log('lalalala jing');
  };

  render() {
    return (
      <FeedContent
        data={ this.state.data }
        onUpdate={ namafungsi }
      />
    );
  }
}
