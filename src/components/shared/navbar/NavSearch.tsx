import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';

const NavSearch = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <input
      type='search'
      placeholder='Search Products ...'
      className={`w-full max-w-[320px] rounded-md p-2 px-3 text-sm font-medium outline-none focus:border-blue-600 ${dark ? 'bg-gray-800 text-white border border-gray-800 focus:border-blue-600' : 'border border-gray-300 shadow-2xs shadow-gray-300'} transition duration-300`}
    />
  );
};
export default NavSearch;
