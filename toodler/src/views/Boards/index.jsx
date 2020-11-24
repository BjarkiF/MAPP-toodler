import React from 'react';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

import { boards } from '../../resources/data.json';

const Boards = ({navigation}) => {

    return (
        <List 
            items={ boards } 
            renderItem={ item => 
            <ListItem 
                key={item.id} 
                name={item.name} 
                src={item.thumbnailPhoto} 
                pressIt={ () => navigation.navigate('Board', { boardId: item.id, }) }
            /> }
        />
    );
}

export default Boards;