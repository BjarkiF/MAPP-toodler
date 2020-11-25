import data from '../resources/data.json';

export const getAllBoards = () => {
  const { boards } = data;
  return boards;
};

export const getListByBoardId = (id) => data.lists.filter((x) => x.boardId === id);
export const removeListById = (id) => data.lists.filter((x) => x.id !== id);

export const getTasksByListId = (id) => {
  const list = data.tasks.filter((x) => x.listId === id);
  return list;
};

export const getTasksByBoardIdClean = (id) => {
  const lists = getListByBoardId(id);
  let tasks = [];
  for (let i = 0; i < lists.length; i += 1) {
    tasks.push(getTasksByListId(lists[i].id));
  }
  return tasks;
};

export const getListByBoardIdClean = (id) => {
  let listRaw = getListByBoardId(id);
  let listClean;
  // EHV vinna gögnin

  return listClean;
};
