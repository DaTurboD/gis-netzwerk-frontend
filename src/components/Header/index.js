import React, { useState } from 'react';
import useTranslations from '../useTranslations';
import Navigation from '../HeaderNavigation';
import ButtonMenu from '../ButtonMenu';
import Logo from '../Logo';
import * as S from './styled';

const Header = ({ locale, categoryColor }) => {
  const { home } = useTranslations();
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <S.HeaderWrapper categoryColor={categoryColor}>
      <S.Container>
        <S.LogoLink to={`/`} title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>
        <S.NavMenu>
          <Navigation isActive={toggleMenu} handleToggleMenu={handleToggleMenu} />
        </S.NavMenu>
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;