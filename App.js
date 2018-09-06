import React from 'react';
import { StyleSheet, Text, View, Image, TabBarIOS, NavigatorIOS } from 'react-native';

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

class FeedList extends React.Component {
  render() {
    return (
      <View>
        <View
          style={styles.titleContainer}
        >
          <Image
            source={require('./assets/navigation-bar-icons/title/icon.png')}
            style={styles.titleImage}
          />
        </View>
        <View>
          <Text>Hello World!</Text>
        </View>
      </View>
    );
  }
}

class FeedScreen extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FeedList,
          title: '',
        }}
        navigationBarHidden={true}
        barTintColor={'white'}
        translucent={false}
        style={{flex: 1}}
      />
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
  titleContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 88,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: {
      height: 4,
      width: 0
    },
    borderBottomWidth: 0.5,
    borderColor: '#e5e5e5'
  },
  titleImage: {
    top: 42
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    height: 400
  },
});
