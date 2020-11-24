import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import {getListByBoardId} from '../../services/littleHelper';

class Board extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('name', 'CockSucker')
        };
    };
    constructor(props) {
        super(props);
        const { params } = this.props.route;
        this.state = {
            lists: getListByBoardId(params.boardId)
        };
    }

    componentDidMount() {
    
    }

    render() {
        const { boardId } = this.props.route.params;
        const { lists } = this.state;
        return (
            <View>
                <Text>Board nr: {boardId}</Text>
        { lists.map(x => <Text key={x.id}>{x.name}</Text>) }
            </View>
        );
    }
}

export default Board;