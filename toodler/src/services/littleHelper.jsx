import data from '../resources/data.json';

export const getAllBoards = () => {
  const { boards } = data;
  return boards;
};

export const getListByBoardId = (id) => data.lists.filter((x) => x.boardId === id);
