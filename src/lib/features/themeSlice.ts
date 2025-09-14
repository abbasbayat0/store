import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setHtmlClass } from '../utils/darkHTML';

const initialState: { dark: boolean } = {
  dark: false,
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
      localStorage.setItem('theme', JSON.stringify(state.dark));
      setHtmlClass(state.dark);
    },
    initializeTheme: (state) => {
      state.dark =
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        Boolean(JSON.parse(localStorage.getItem('theme') as string));
      setHtmlClass(state.dark);
    },
  },
});
export const { changeTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
