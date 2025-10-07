import { createSlice } from '@reduxjs/toolkit'

export const todoList = createSlice({
  name: 'todo',
  initialState: {
    show: false
  },
  reducers: {
    updateTodo:(state,action)=>{
        state.show = action.payload
    }
  }
})

export const { updateTodo } = todoList.actions

export default todoList.reducer