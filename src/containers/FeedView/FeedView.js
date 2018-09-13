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
      ],
      data1: [
        {
          key: '0',
          title: 'Everything to expect at Apple’s September 12th ‘Gather round’ event',
          author: '9to5Mac',
          date: '2 HOURS',
          read: false,
          readLater: false,
          uri: 'https://9to5mac.com/2018/09/08/everything-to-expect-at-apples-september-12th-gather-round-event/',
          imageUri: 'https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/09/9to5Mac_XS_S4.jpg',
        },
        {
          key: '1',
          title: 'Star Wars: The Clone Wars season 7: Release date, plot and possible spoilers',
          author: 'CNET',
          date: '20 DAYS',
          read: false,
          readLater: false,
          uri: 'https://www.cnet.com/google-amp/news/star-wars-the-clone-wars-season-7-release-date-plot-possible-spoilers/',
          imageUri: 'https://cnet1.cbsistatic.com/img/p8vIQ7r8EQVgLIvid7t07LTWEd8=/370x0/2018/08/10/3bf89773-1c34-4ab3-836c-17faee6f2095/a27894b4-e9d6-403d-bc44-fbd26461fe22-2094-000001b1ad60766e.jpg',
        },
        {
          key: '2',
          title: 'Alibaba co-founder Jack Ma is planning exit from the company',
          author: 'The Verge',
          date: 'TODAY',
          read: false,
          readLater: false,
          uri: 'https://www.theverge.com/2018/9/7/17833460/alibaba-china-jack-ma-resigns-next-week-philanthropy-e-commerce',
          imageUri: 'https://cdn.vox-cdn.com/thumbor/3Ee29uMvhZqV8K_UUM-9-ZVEnuc=/0x0:3000x2000/1820x1213/filters:focal(1909x628:2389x1108)/cdn.vox-cdn.com/uploads/chorus_image/image/61241233/814036074.jpg.0.jpg',
        },
        {
          key: '10',
          title: 'Neural scene representation and rendering',
          author: 'Deepmind Blog',
          date: '20 MINUTES',
          read: false,
          readLater: false,
          uri: 'https://deepmind.com/blog/neural-scene-representation-and-rendering/',
          imageUri: 'https://storage.googleapis.com/deepmind-live-cms/images/Image_%2520NeuralSceneRendering_RGB_16_9_TICC2u7.width-800.jpg',
        },
        {
          key: '11',
          title: 'Learning Dexterity',
          author: 'OpenAI Blog',
          date: '12 HOURS',
          read: false,
          readLater: false,
          uri: 'https://blog.openai.com/learning-dexterity/',
          imageUri: 'https://blog.openai.com/content/images/2018/07/195A4726-2.jpg',
        },
        {
          key: '12',
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
      ],
      data2: [
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
      ],
      refreshing: false,
    };
  };

  handleCardPress = (itemKey) => {

    // TODO: call API to mark item as read

    const newData = Object.assign([], this.state.data);
    const pressedItem = newData.find(item => item.key == itemKey)
    pressedItem.read = true;
    this.setState({data: newData});

    Linking.openURL(pressedItem.uri);
  };

  handleCardReadLaterPress = (itemKey) => {

    // TODO: call API to add item to reading list

    this.setState((state, props) => {
      const newData = Object.assign([], state.data);
      const pressedItem = newData.find(item => item.key == itemKey)
      pressedItem.readLater = !pressedItem.readLater;
      return { data: newData };
    });
  };

  handleCardUnreadPress = (itemKey) => {

    // TODO: call API to mark item as unread

    const newData = Object.assign([], this.state.data);
    const pressedItem = newData.find(item => item.key == itemKey)
    pressedItem.read = false;
    this.setState({data: newData});
  };

  handleCardRemove = (itemKey) => {

    // TODO: call API to remove item

    this.setState((state, props) => {
      const newData = state.data.filter(function(item) {
        return item.key !== itemKey;
      });
      return { data: newData };
    });
  };

  makeRemoteRequest = () => {

    // TODO: call API to refresh

    this.setState({ refreshing: false });
  };

  handleRefresh = () => {



    const newData = this.state.data == this.state.data1 ? this.state.data2 : this.state.data1;
    this.setState(
      {
        data: newData,
        refreshing: true,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  render() {
    // const footer = (
    //   <View 
    //     style={{
    //       alignItem: 'center',
    //       justifyContent: 'center',
    //     }}
    //   >
    //     <Text>
    //       That's all for now!
    //     </Text>
    //   </View>
    // );

    // const listFooter = {
    //   key: -1,
    //   footer: true,
    // };
    // const dataWithFooter = Object.assign([], this.state.data);

    return (
      <FeedContent
        data={ this.state.data }
        handleCardPress={ this.handleCardPress }
        handleCardReadLaterPress={ this.handleCardReadLaterPress }
        handleCardUnreadPress={ this.handleCardUnreadPress }
        handleCardRemove={ this.handleCardRemove }
        refreshing={ this.state.refreshing }
        onRefresh={ this.handleRefresh }
      />
    );
  }
}
