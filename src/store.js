import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todo/todoSlice';

const store = configureStore({
  devTools: true,
  reducer: {
    todo: todoReducer,
  },
});

export default store;
