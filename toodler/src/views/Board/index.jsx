import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import data from '../../resources/data.json';
import ListItem from '../../components/ListItem';
import DisplayList from '../DisplayList';
import NewListForm from './NewListForm';
import commonStyles from '../../styles/commonStyles';
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
    setListOnBoard((prev) => {
      const { name, color, id } = l;
      const copyOfLists = [...prev];
      copyOfLists.push({
        name,
        color,
        id,
        boardId,
      });
      return copyOfLists;
    });
    setAddList(false);
  };

  const removeList = (id) => {
    const newList = listOnBoard.filter((x) => x.id !== id);
    setListOnBoard(newList);
  };

  const editList = (obj, newObj) => {
    setListOnBoard((prevListOnBoard) => {
      const copyOfLists = [...prevListOnBoard];
      const index = copyOfLists.findIndex((x) => x.id === obj.id);
      copyOfLists[index] = {
        ...obj,
        name: newObj.name,
        color: newObj.color,
      };
      return copyOfLists;
    });
  };

  return (
    <View style={commonStyles.Container}>
      { addList ? (
        <NewListForm
          confirm={(l) => addToList(l)}
          cancel={() => setAddList(false)}
        />
      ) : (null) }
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
            remove={() => removeList(item.id)}
            edit={(l) => editList(item, l)}
          />
        )}
      />
    </View>
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
