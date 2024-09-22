import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    'Laptop', 'Smartphone', 'Tablet', 'Monitor', 'Keyboard', 'Mouse', 'Printer', 'Charger', 'USB Drive', 
    'Headphones', 'Camera', 'Speaker', 'Smartwatch', 'Router', 'Hard Drive', 'Projector', 'Microphone', 
    'Webcam', 'Drone', 'Gaming Console', 'Power Bank', 'Bluetooth Earbuds', 'Smart TV', 'Graphics Card'
  ],
  searchTerm: ''
};



const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export const { setSearchTerm } = itemsSlice.actions
export default itemsSlice.reducer
