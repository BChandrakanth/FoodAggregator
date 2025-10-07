import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterReducer'
import todoReducer from '../features/todoList/todoListReducer'
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todoReducer:todoReducer
  }
})