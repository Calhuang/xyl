import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  drawer: {
    left: false,
    right: false
  },
  loading: true,
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleDrawer: (state, { payload }) => {
      state.drawer = {...state.drawer, [payload.anchor]: payload.open}
    },
    toggleLoading: (state, { payload }) => {
      state.loading = payload
    },
  },
})

// export action creators
export const { toggleDrawer, toggleLoading } = globalSlice.actions

// A selector
export const globalSelector = state => state
export const drawerSelector = state => state.drawer

// The reducer
export default globalSlice.reducer