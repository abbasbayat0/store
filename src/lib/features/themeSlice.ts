import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialDark } from '../utils/initialDark';

const initialState: { dark: boolean } = {
  dark: initialDark(),
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
