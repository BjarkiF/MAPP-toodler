import React, {useState, useEffect} from 'react';

import List from '../../components/List';
import BookItem from '../../components/BookItem';

import {getAllBoards} from '../../services/littleHelper';

const Boards = ({navigation}) => {
    const [allBoards, setAllBoards] = useState([]);

    useEffect(() => {
        if (allBoards.length === 0) {
            setAllBoards(getAllBoards());
        }
    });
    
    const removeTable = (id) => {
        
    }

    return (
        <List 
            items={ allBoards } 
            renderItem={ item => 
            <BookItem 
                key={item.id} 
                name={item.name} 
                src={item.thumbnailPhoto} 
                pressIt={ () => navigation.navigate('Board', { boardId: item.id, name: item.name }) }
                remove={ () => console.log('REMOVE') }
                edit={ () => console.log('EDIT!') }
            /> }
        />
    );
}

export default Boards;