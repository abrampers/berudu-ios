import React from 'react';
import { NavigatorIOS } from 'react-native';

import ProfileScreen from '../../components/ProfileScreen/ProfileScreen';

class ProfileTab extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ProfileScreen,
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

export default ProfileTab;
