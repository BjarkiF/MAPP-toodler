import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import CommonStyles from '../../../styles/commonStyles';
import styles from './styles';
import NewBoardForm from '../NewBoardForm';

const BoardItem = ({
  boardObj, gotoBoard, remove, edit,
}) => {
  const [configure, setConfigure] = useState(null);
  const { name, thumbnailPhoto } = boardObj;

  const toggleView = (conf) => {
    if (conf === configure) {
      setConfigure(null);
    } else {
      setConfigure(conf);
    }
  };

  return (
    <View style={CommonStyles.View}>
      { !configure ? (
        <TouchableOpacity style={styles.leftBoardView} onPress={gotoBoard}>
          <Text>{ name }</Text>
          <Image style={styles.thumbnail} source={{ uri: thumbnailPhoto }} />
        </TouchableOpacity>
      ) : (
        <NewBoardForm
          obj={boardObj}
          confirm={(b) => {
            edit(b);
            toggleView(null);
          }}
        />
      )}
      <View style={styles.rightBoardView}>
        <TouchableOpacity onPress={() => toggleView('edit')}>
          <FontAwesome name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => remove(boardObj.id)}>
          <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
BoardItem.propTypes = {
  boardObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  }).isRequired,
  gotoBoard: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};
export default BoardItem;
