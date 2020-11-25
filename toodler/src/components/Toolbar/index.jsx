import React from 'react';
import {  View, Text } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons'; 

const Toolbar = ({title}) => {
    return (
        <View style={{ flex: 1, flexDirection: "row", }}>
            <Text style={{ padding: 10, }}>{title}</Text>
            <Entypo name="add-to-list" size={24} color="black" />
            <FontAwesome name="edit" size={24} color="black" />
            <FontAwesome name="trash-o" size={24} color="black" />
        </View>
    );
}

export default Toolbar;