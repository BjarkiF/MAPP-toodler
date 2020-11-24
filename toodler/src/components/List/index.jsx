import React from 'react';
import { View } from 'react-native';
import styles from './styles';
class List extends React.Component {
    render() {
        const { items, renderItem } = this.props;
        return (
            <View style={styles.container}>
                { items.map(renderItem) }
            </View>
        );
    }
}

export default List;