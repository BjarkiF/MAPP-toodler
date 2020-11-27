import React from 'react';
import PropTypes from 'prop-types';
import data from '../../resources/data.json';
import ListItem from '../../components/ListItem';
import DisplayList from '../../components/DisplayList';

const Board = ({ navigation }) => {
  const { boardId } = navigation.state.params;
  const boardList = data.lists.filter((x) => x.boardId === boardId);

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
          })}
        />
      )}
    />
  );
};

Board.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      boardId: PropTypes.number,
    }),
  }).isRequired,
};

export default Board;
