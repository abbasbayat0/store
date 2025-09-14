'use client';
import { Suspense } from 'react';
import Container from '../global/Container';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';
import useTheme from '@/lib/hooks/useTheme';

const Navbar = () => {
  const dark = useTheme();
  return (
    <nav className='border-b border-gray-300'>
      <Container
        className={`flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:items-center sm:justify-between`}
      >
        <Logo />
        <Suspense>
          <NavSearch dark={dark} />
        </Suspense>
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
