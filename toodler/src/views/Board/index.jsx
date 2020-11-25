import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { getListByBoardId } from '../../services/littleHelper';

class Board extends React.Component {
  constructor(props) {
    super(props);
    const { route } = this.props;
    this.state = {
      lists: getListByBoardId(route.params.boardId),
    };
  }

  componentDidMount() {

  }

  render() {
    const { lists } = this.state;
    return (
      <View>
        { lists.map((x) => <Text key={x.id}>{x.name}</Text>) }
      </View>
    );
  }
}
Board.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      boardId: PropTypes.number,
    }),
  }).isRequired,
};
export default Board;
