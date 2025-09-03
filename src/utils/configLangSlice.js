import { createSlice } from "@reduxjs/toolkit";

const configLangSlice = createSlice({
  name: "configLang",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configLangSlice.actions;
export default configLangSlice.reducer;
