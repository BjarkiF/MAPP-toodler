import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getListByBoardId } from '../../services/littleHelper';
import ListItem from '../../components/ListItem';
import DisplayList from '../../components/DisplayList';

const Board = ({ navigation, boardId }) => {
  const [boardList, setList] = useState([]);

  useEffect(() => {
    if (boardList.length === 0) {
      setList(getListByBoardId(boardId));
    }
  });

  return (
    <DisplayList
      items={boardList}
      renderItem={(item) => (
        <ListItem
          key={item.id}
          name={item.name}
          color={item.color}
          pressIt={() => navigation.navigate('List', { listId: item.id, name: item.name })}
        />
      )}
    />
  );
};

export default Board;
