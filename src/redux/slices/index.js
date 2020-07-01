import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  pageLoading: false,
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    showLoader: state => {
      state.pageLoading = true
      const loader = document.querySelector('.loader')
      loader.classList.remove('loader--hide')
    },
    hideLoader: state => {
      state.pageLoading = false
      const loader = document.querySelector('.loader')
      loader.classList.add('loader--hide')
    },
  },
})

// export action creators
export const { showLoader, hideLoader } = globalSlice.actions

// A selector
export const globalSelector = state => state

// The reducer
export default globalSlice.reducer