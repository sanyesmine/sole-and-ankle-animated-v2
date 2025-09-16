import React from 'react';
import styled from 'styled-components';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

// ----------------------------
// Styled Components
// ----------------------------

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

// ----------------------------
// Flip-Up NavLink Component
// ----------------------------

const NavLink = ({ href, children }) => {
  return (
    <StyledNavLink href={href}>
      <span className="regular">{children}</span>
      <span className="bold">{children}</span>
    </StyledNavLink>
  );
};

const StyledNavLink = styled.a`
  position: relative;
  display: inline-block;
  height: 1.5em;   /* ⬆️ increased from 1.2em */
  padding: 0 2px;  /* ⬅️ some horizontal breathing room */
  overflow: hidden;
  perspective: 500px;
  text-decoration: none;

  span {
    display: block;
    transition: transform 300ms;
    transform-origin: top;
    line-height: 1.4; /* ⬆️ improves spacing for tall words */
  }

  .regular {
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};
    transform: translateY(0) rotateX(0);
  }

  .bold {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.125rem;
    text-transform: uppercase;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.bold};
    transform: translateY(100%) rotateX(-90deg);
  }

  &:hover .regular {
    transform: translateY(-100%) rotateX(90deg);
  }

  &:hover .bold {
    transform: translateY(0) rotateX(0);
  }

  &:first-of-type .regular,
  &:first-of-type .bold {
    color: var(--color-secondary);
  }
`;

 


export default Header;
