import React from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';

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
          icon={require('./assets/tab-bar-icons/feed/default/icon.png')}
          selectedIcon={require('./assets/tab-bar-icons/feed/selected/icon.png')}
          title={'Feed'}
          onPress={ () => this.setState({selectedTab: 'feed'}) }
          selected={ this.state.selectedTab == 'feed' }
        >
          <FeedScreen/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./assets/tab-bar-icons/subscriptions/default/icon.png')}
          selectedIcon={require('./assets/tab-bar-icons/subscriptions/selected/icon.png')}
          title={'Subscriptions'}
          onPress={ () => this.setState({selectedTab: 'subscriptions'}) }
          selected={ this.state.selectedTab == 'subscriptions' }
        >
          <SubscriptionsScreen/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./assets/tab-bar-icons/reading-list/default/icon.png')}
          selectedIcon={require('./assets/tab-bar-icons/reading-list/selected/icon.png')}
          title={'Reading List'}
          onPress={ () => this.setState({selectedTab: 'reading-list'}) }
          selected={ this.state.selectedTab == 'reading-list' }
        >
          <ReadingListScreen/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

class FeedScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
          hello Feed Feed Feed Feed Feed
        </Text>
      </View>
    );
  }
}

class SubscriptionsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
          hello Subscriptions Subscriptions
        </Text>
      </View>
    );
  }
}

class ReadingListScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
          hello ReadingList ReadingList
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
