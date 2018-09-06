import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';

import SubscriptionsList from '../../components/SubscriptionsList/SubscriptionsList';

class SubscriptionsScreen extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: SubscriptionsList,
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


// class SubscriptionsScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           hello Subscriptions Subscriptions
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SubscriptionsScreen;
