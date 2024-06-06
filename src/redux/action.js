import {
  Add_Todo,
  Filter_Todo,
  Mark_Completed_Todo,
  Mark_Incomplete_Todo,
  Mark_All_Done,
  Remove_Todo,
  Toggle_Todo,
  Update_Search,
  Edit_Todo,
  Set_Todo,
} from "./actionTypes";

export const addTodo = (text) => ({
  type: Add_Todo,
  payload: { text },
});

export const setTodo = (text) => ({
  type: Set_Todo,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: Toggle_Todo,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: Remove_Todo,
  payload: { id },
});

export const filterTodo = (filter) => ({
  type: Filter_Todo,
  payload: { filter },
});

export const markCompleted = (id) => ({
  type: Mark_Completed_Todo,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: Mark_Incomplete_Todo,
  payload: { id },
});

export const markAllDone = () => ({
  type: Mark_All_Done,
});

export const updateSearch = (searchData) => ({
  type: Update_Search,
  payload: { searchData },
});

export const editTodo = (text, id) => ({
  type: Edit_Todo,
  payload: { text, id },
});
