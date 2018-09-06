import React from 'react';
import { StyleSheet, Text, View, Image, TabBarIOS, NavigatorIOS } from 'react-native';

import FeedScreen from './src/containers/FeedScreen/FeedScreen';
import SubscriptionsScreen from './src/containers/SubscriptionsScreen/SubscriptionsScreen';
import ReadingListScreen from './src/containers/ReadingListScreen/ReadingListScreen';
import ProfileScreen from './src/containers/ProfileScreen/ProfileScreen';

export default class App extends React.Component {
  constructor (props) {
    super();

    this.state = {
      selectedTab: 'feed',
    }
  }

  render() {
    return (
      <TabBarIOS
        translucent={false}
        barTintColor={'white'}
        tintColor={'black'}
      >
        <TabBarIOS.Item
          icon={require('./src/assets/tab-bar-icons/feed/default/icon.png')}
          selectedIcon={require('./src/assets/tab-bar-icons/feed/selected/icon.png')}
          title={'Feed'}
          onPress={ () => this.setState({selectedTab: 'feed'}) }
          selected={ this.state.selectedTab == 'feed' }
        >
          <FeedScreen/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./src/assets/tab-bar-icons/subscriptions/default/icon.png')}
          selectedIcon={require('./src/assets/tab-bar-icons/subscriptions/selected/icon.png')}
          title={'Subscriptions'}
          onPress={ () => this.setState({selectedTab: 'subscriptions'}) }
          selected={ this.state.selectedTab == 'subscriptions' }
        >
          <SubscriptionsScreen/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./src/assets/tab-bar-icons/reading-list/default/icon.png')}
          selectedIcon={require('./src/assets/tab-bar-icons/reading-list/selected/icon.png')}
          title={'Reading List'}
          onPress={ () => this.setState({selectedTab: 'reading-list'}) }
          selected={ this.state.selectedTab == 'reading-list' }
        >
          <ReadingListScreen/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./src/assets/tab-bar-icons/profile/default/icon.png')}
          selectedIcon={require('./src/assets/tab-bar-icons/profile/selected/icon.png')}
          title={'Profile'}
          onPress={ () => this.setState({selectedTab: 'profile'}) }
          selected={ this.state.selectedTab == 'profile' }
        >
          <ReadingListScreen/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
