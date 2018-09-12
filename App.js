import React from 'react';
import { StyleSheet, Text, View, Image, TabBarIOS, NavigatorIOS, SafeAreaView } from 'react-native';

import FeedTab from './src/containers/FeedTab/FeedTab';
import SubscriptionsTab from './src/containers/SubscriptionsTab/SubscriptionsTab';
import ReadingListTab from './src/containers/ReadingListTab/ReadingListTab';
import ProfileTab from './src/containers/ProfileTab/ProfileTab';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'feed',
    }
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
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
            <FeedTab />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={require('./src/assets/tab-bar-icons/subscriptions/default/icon.png')}
            selectedIcon={require('./src/assets/tab-bar-icons/subscriptions/selected/icon.png')}
            title={'Subscriptions'}
            onPress={ () => this.setState({selectedTab: 'subscriptions'}) }
            selected={ this.state.selectedTab == 'subscriptions' }
          >
            <SubscriptionsTab />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={require('./src/assets/tab-bar-icons/reading-list/default/icon.png')}
            selectedIcon={require('./src/assets/tab-bar-icons/reading-list/selected/icon.png')}
            title={'Reading List'}
            onPress={ () => this.setState({selectedTab: 'reading-list'}) }
            selected={ this.state.selectedTab == 'reading-list' }
          >
            <ReadingListTab />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={require('./src/assets/tab-bar-icons/profile/default/icon.png')}
            selectedIcon={require('./src/assets/tab-bar-icons/profile/selected/icon.png')}
            title={'Profile'}
            onPress={ () => this.setState({selectedTab: 'profile'}) }
            selected={ this.state.selectedTab == 'profile' }
          >
            <ProfileTab />
          </TabBarIOS.Item>
        </TabBarIOS>
      </SafeAreaView>
    );
  }
}
