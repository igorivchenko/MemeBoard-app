import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@heroui/react';
import Logo from '../Logo/Logo';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <Navbar className="bg-blue-300">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem isActive={location.pathname === '/table'}>
          <Link
            className={
              pathname === '/table'
                ? 'text-white text-lg'
                : 'text-inherit text-lg hover:text-blue-600'
            }
            as={NavLink}
            to="/table"
            color="foreground"
          >
            Table
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === '/memes'}>
          <Link
            className={
              pathname === '/memes'
                ? 'text-white text-lg'
                : 'text-inherit text-lg hover:text-blue-600'
            }
            as={NavLink}
            to="/memes"
            color="foreground"
          >
            Memes
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
