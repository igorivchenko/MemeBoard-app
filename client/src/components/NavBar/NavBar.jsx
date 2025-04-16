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
    <Navbar className="bg-blue-100">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem isActive={location.pathname === '/table'}>
          <Link
            className={
              pathname === '/table'
                ? 'text-blue-600 text-lg'
                : 'text-blue-950 text-lg hover:text-blue-600'
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
                ? 'text-blue-600 text-lg'
                : 'text-blue-950 text-lg hover:text-blue-600'
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
