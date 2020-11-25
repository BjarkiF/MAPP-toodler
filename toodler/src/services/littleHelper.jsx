import data from '../resources/data.json';

export const getAllBoards = () => {
    const { boards } = data;
    return boards;
}

export const getListByBoardId = (id) => {
    return data.lists.filter(x => x.boardId === id );
}

export const removeListById = (id) => {
    return data.lists.filter(x => x.id !== id );
}

