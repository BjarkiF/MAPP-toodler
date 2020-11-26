import React from 'react';
// import PropTypes from 'prop-types';
import { getListByBoardId } from '../../services/littleHelper';
import ListItem from '../../components/ListItem';
import DisplayList from '../../components/DisplayList';

const Board = ({ navigation }) => {
  const {boardId} = navigation.state.params;
  console.log(boardId);
  const boardList = getListByBoardId(boardId);
  console.log(boardList);

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
};

export default Board;
