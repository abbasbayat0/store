import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useTheme = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return dark;
};

export default useTheme;
