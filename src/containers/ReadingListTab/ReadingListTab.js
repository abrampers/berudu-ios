import React from 'react';
import { NavigatorIOS } from 'react-native';

import ReadingListScreen from '../../components/ReadingListScreen/ReadingListScreen';

class ReadingListTab extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ReadingListScreen,
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

export default ReadingListTab;
