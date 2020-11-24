import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    board: {
        padding: 5,
    },
    thumbnail: {
        width: 100,
        height: 100
    },
});

const ListItem = ({name, src, pressIt, selected}) => {
    const backgroundColor =  selected ? "#452145" : "#FFF";

    return (
        <TouchableOpacity style={ [ styles.item, { backgroundColor } ] } onPress={ pressIt }>
            <Text style={styles.board}>{ name }</Text>
            <Image style={ styles.thumbnail } source={{ uri: src }} />
        </TouchableOpacity>
    )
};


export default ListItem;