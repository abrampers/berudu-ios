import React from 'react';
import { NavigatorIOS } from 'react-native';

import FeedList from '../../components/FeedList/FeedList';

class FeedScreen extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FeedList,
          title: ''
        }}
        navigationBarHidden={true}
        barTintColor={'white'}
        translucent={false}
        style={{flex: 1}}
      />
    );
  }
}

export default FeedScreen;
