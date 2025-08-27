'use client';
import Container from '../global/Container';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';

const Navbar = () => {
  return (
    <nav className='border-b border-gray-300'>
      <Container
        className={`flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:items-center sm:justify-between`}
      >
        <Logo />
        <NavSearch />
        <div className='flex items-center gap-4'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
