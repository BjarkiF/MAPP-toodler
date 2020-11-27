import React from 'react';
import PropTypes from 'prop-types';
import data from '../../resources/data.json';
import ListItem from '../../components/ListItem';
import DisplayList from '../../components/DisplayList';
// import commonStyles from '../../styles/commonStyles'

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
/*
import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet, Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { getListByBoardId, getAllTasksByBoardId, getTasksByListId } from '../../services/littleHelper';

import DisplayList from '../../components/DisplayList';
import ListItem from '../../components/ListItem';

const styles = StyleSheet.create({
  centeredView: {
    zIndex: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',

    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    color: 'black',
    paddingRight: 5,
  },
});

const Board = ({ route, navigation }) => {
  const [lists, setLists] = useState([]);
  const [reloadList, setReloadList] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (reloadList) {
      setLists(getListByBoardId(route.params.boardId));
      setReloadList(false);
    }
    navigation.setOptions({
      headerRight: () => (
        <TouchableHighlight onPress={() => setShowSettings(!showSettings)}>
          <View style={styles.button}>
            <Feather name="settings" size={24} color="black" />
          </View>
        </TouchableHighlight>
      ),
    });
  });

  return (
    <View>
      { showSettings ? (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Settings</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setShowSettings(!showSettings);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                console.log('Add List To Board');
              }}
            >
              <Text style={styles.textStyle}>New List</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
        : (null)}
      <DisplayList
        items={lists}
        renderItem={(item) => (
          <ListItem key={item.id} listObj={item} tasks={getTasksByListId(item.id)} />
        )}
      />
    </View>
  );
}; */

Board.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      boardId: PropTypes.number,
    }),
  }).isRequired,
};

export default Board;
