import React from 'react';
import { View, Text } from 'react-native';

export default class ReadingListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    }
  }

  render() {
    return(
      <Text>hihiihihihih</Text>
      //<ReadingListHeader
      //  page={this.state.page}
      ///>
      //<ReadingListView
      //  page={this.state.page}
      ///>
    );
  }
}
