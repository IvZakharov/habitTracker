import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Habit, HabitsState } from './types'


// Define the initial state using that type
const initialState: HabitsState = {
  items: []
}

export const habitsSlice = createSlice({
  name: 'habits',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setItems(state: { items: Habit[]; }, action: PayloadAction<Habit[]>) {
      state.items = action.payload;
    },

    addItems(state: { items: Habit[]; }, action: PayloadAction<Habit[]>) {
      // state.items = action.payload;
    },
  },
})

export const { setItems } = habitsSlice.actions


export default habitsSlice.reducer