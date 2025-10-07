import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    updateCounter:(state,action)=>{
        state.value = action.payload
    }
  }
})

export const { updateCounter } = counterSlice.actions

export default counterSlice.reducer