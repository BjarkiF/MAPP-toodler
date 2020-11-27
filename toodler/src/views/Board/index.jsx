import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import data from '../../resources/data.json';

import ListItem from '../List/ListItem';
import DisplayList from '../DisplayList';
import Toolbar from '../Toolbar';
import EditItemView from '../EditItemView';

const Board = ({ route, navigation }) => {
  const { boardId } = route.params;

  const [listOnBoard, setListOnBoard] = useState([]);
  const [reloadBoard, setReloadBoard] = useState(true);
  const [addList, setAddList] = useState(false);

  useEffect(() => {
    if (reloadBoard) {
      setListOnBoard(data.lists.filter((x) => x.boardId === boardId));
      setReloadBoard(false);
    }
    navigation.setOptions({
      headerRight: () => (
        <Toolbar toggle={() => setAddList(!addList)} />
      ),
    });
  });

  const addToList = (l) => {
    setListOnBoard((prev) => ({
      ...prev,
      lb,
    }));
  };

  return (
    <DisplayList
      items={listOnBoard}
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
