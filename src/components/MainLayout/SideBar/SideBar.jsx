// import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
import { UserNav } from '../UserNav/UserNav';

import * as STC from './SideBar.styled';
import LogoGoose from '../../../images/GOOSE.png';
import Icons from '../../../images/sprite.svg';

export const SideBar = ({ isMobalMenuOpen, closeMobalMenu }) => {
  // useEffect(() => {
  //   const close = e => {
  //     if (isMobalMenuOpen && e.keyCode === 27) {
  //       handleCloseMobalMenu();
  //     }
  //   };
  //   window.addEventListener('keydown', close);
  //   return () => window.removeEventListener('keydown', close);
  // }, [isMobalMenuOpen]);

  const handleCloseMobalMenu = () => {
    closeMobalMenu(false);
  };

  return (
    <>
      <STC.Container className={isMobalMenuOpen && 'openMobalMenu'}>
        <STC.Box>
          <STC.Logo to="/" onClick={handleCloseMobalMenu}>
            <STC.LogoImg src={`${LogoGoose}`} />
            <STC.LogoTxt>GooseTrack</STC.LogoTxt>
          </STC.Logo>
          <STC.CloseBtn onClick={handleCloseMobalMenu}>
            <STC.CloseBtnSvg>
              <use xlinkHref={`${Icons}#icon-close`} />
            </STC.CloseBtnSvg>
          </STC.CloseBtn>
        </STC.Box>
        <UserNav closeMobalMenu={closeMobalMenu} />
        <LogoutBtn />
      </STC.Container>
      {isMobalMenuOpen && <STC.Overlay onClick={handleCloseMobalMenu} />}
    </>
  );
};

SideBar.propTypes = {
  isMobalMenuOpen: PropTypes.bool.isRequired,
  closeMobalMenu: PropTypes.func.isRequired,
};
