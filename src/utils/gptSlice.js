import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: [],
    movieResult:[],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const {movieNames,movieResult} = action.payload
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    },
    removeGptMovieResult: (state,action) => {
      state.movieNames = [];
      state.movieResult = [];
    }
  },
});
export const { toggleGptSearchView, addGptMovieResult, removeGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
