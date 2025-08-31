import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { dark: boolean } = {
  dark: false,
  // window.matchMedia('(prefers-color-scheme: dark)').matches &&
  // Boolean(JSON.parse(localStorage.getItem('theme') as string)),
};
const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
      localStorage.setItem('theme', JSON.stringify(state.dark));
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
