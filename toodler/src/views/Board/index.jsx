import React from 'react';
// import PropTypes from 'prop-types';
import { getListByBoardId } from '../../services/littleHelper';
import ListItem from '../../components/ListItem';
import DisplayList from '../../components/DisplayList';

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

/* const Board = ({ navigation }) => {
  const {boardId} = navigation.state.params;
  const boardList = getListByBoardId(boardId);

  return (
    <DisplayList
      items={boardList}
      renderItem={(item) => (
        <ListItem
          key={item.id}
          name={item.name}
          color={item.color}
          pressIt={() => navigation.navigate('List', {
            listId: item.id,
            name: item.name,
})}
        />
      )}
    />
  );
}; */
export default Board;
