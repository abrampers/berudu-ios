import React from 'react';
import { NavigatorIOS } from 'react-native';

import FeedScreen from '../../components/FeedScreen/FeedScreen';

class FeedTab extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FeedScreen,
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

export default FeedTab;
