import data from '../resources/data.json';

export const getAllBoards = () => {
  const { boards } = data;
  return boards;
};

export const getListByBoardId = (id) => data.lists.filter((x) => x.boardId === id);

export const getTasksByListId = (id) => data.tasks.filter((x) => x.listId === id);

export const getAllTasksByBoardId = (id) => getListByBoardId(id)
  .map((x) => data.tasks
    .filter((y) => x.id === y.listId)).flat();
