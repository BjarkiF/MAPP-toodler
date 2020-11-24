import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Board extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    }

    render() {
        const { boardId } = this.props.route.params;
        return (
            <View>
                <Text>Board nr: {boardId}</Text>
            </View>
        );
    }
}

export default Board;