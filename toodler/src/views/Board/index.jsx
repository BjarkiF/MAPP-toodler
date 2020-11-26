import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { getListByBoardId, getAllTasksByBoardId, getTasksByListId } from '../../services/littleHelper';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

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
        <List
          items={lists}
          renderItem={(item) => (
            <ListItem key={item.id} listObj={item} tasks={getTasksByListId(item.id)} />
          )}
        />
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
