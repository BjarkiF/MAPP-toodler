import React from 'react';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

import {getAllBoards} from '../../services/littleHelper';

const Boards = ({navigation}) => {

    return (
        <List 
            items={ getAllBoards() } 
            renderItem={ item => 
            <ListItem 
                key={item.id} 
                name={item.name} 
                src={item.thumbnailPhoto} 
                pressIt={ () => navigation.navigate('Board', { boardId: item.id, name: item.name }) }
            /> }
        />
    );
}

export default Boards;