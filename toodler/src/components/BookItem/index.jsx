import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
    boardView: {
        flex: 1,
        flexDirection: 'row',
        padding: 3,
        marginBottom: 5,
        backgroundColor: "#FFF",
    },

    leftBoardView: {
        padding: 0,
        width: 200,
    },
    configureBoard: {
        width: 200
    },
    board: {
        padding: 0,
    },
    thumbnail: {
        width: 80,
        height: 80
    },
    boardConfigure: {
        height: 100,
        width: 100
    },
});

const BookItem = ({name, src, pressIt}) => {
    const [configure, setConfigure] = useState(true);
    return (
        <View style={styles.boardView}>
            { configure ? (
                <TouchableOpacity style={ styles.leftBoardView } onPress={ pressIt }>
                    <Text>{ name }</Text>
                    <Image style={styles.thumbnail} source={{ uri: src }} />
                </TouchableOpacity>
            ) : ( 
                <View style={ styles.leftBoardView } >
                    <Text>Fuck this FALSE!</Text>
                </View>
            )}
            <View style={styles.rightBoardView}>
                <TouchableOpacity onPress={ () => setConfigure(!configure) } >
                    <FontAwesome name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => setConfigure(!configure) } >
                    <FontAwesome name="trash-o" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
};


export default BookItem;