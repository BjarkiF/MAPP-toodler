import React from 'react';
import { View } from 'react-native';
import styles from './styles';

class DisplayList extends React.Component {
  render() {
    const { items, renderItem } = this.props;
    return (
      <View style={styles.container}>
        { items.map(renderItem) }
      </View>
    );
  }
}

export default DisplayList;
