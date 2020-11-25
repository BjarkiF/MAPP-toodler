import React from 'react';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

import { boards } from '../../resources/data.json';

const Boards = ({navigation}) => {
<<<<<<< Updated upstream

    return (
        <List 
            items={ boards } 
            renderItem={ item => 
            <ListItem 
                key={item.id} 
                name={item.name} 
                src={item.thumbnailPhoto} 
                pressIt={ () => navigation.navigate('Board', { boardId: item.id, }) }
=======
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
>>>>>>> Stashed changes
            /> }
        />
    );
}

export default Boards;
