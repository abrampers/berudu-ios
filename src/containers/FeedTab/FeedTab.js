import React from 'react';
import { NavigatorIOS } from 'react-native';

import FeedScreen from '../../components/FeedScreen/FeedScreen';

class FeedTab extends React.Component {

  // TODO: Tembak initial disini
  date = 'September 12';
  newStoriesCount = 11;

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FeedScreen,
          title: '',
          passProps: {
            date: this.date,
            newStoriesCount: this.newStoriesCount,
          }
        }}
        navigationBarHidden={true}
        barTintColor={'white'}
        translucent={false}
        style={{flex: 1}}
      />
    );
  }
}

export default FeedTab;
