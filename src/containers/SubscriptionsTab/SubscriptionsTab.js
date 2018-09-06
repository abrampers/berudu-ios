import React from 'react';
import { NavigatorIOS } from 'react-native';

import SubscriptionsScreen from '../../components/SubscriptionsScreen/SubscriptionsScreen';

class SubscriptionsTab extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: SubscriptionsScreen,
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

export default SubscriptionsTab;
