import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
import { UserNav } from '../UserNav/UserNav';
import * as STC from './SideBar.styled';
import LogoGoose from '../../../images/GOOSE.png';
import Icons from '../../../images/sprite.svg';

export const SideBar = ({ isMobalMenuOpen, closeMobalMenu }) => {
  return (
    <>
      <STC.Container className={isMobalMenuOpen && 'openMobalMenu'}>
        <STC.Box>
          <STC.Logo to="/">
            <STC.LogoImg src={`${LogoGoose}`} />
            <STC.LogoTxt>GooseTrack</STC.LogoTxt>
          </STC.Logo>
          <STC.CloseBtn onClick={() => closeMobalMenu(false)}>
            <STC.CloseBtnSvg>
              <use xlinkHref={`${Icons}#icon-close`} />
            </STC.CloseBtnSvg>
          </STC.CloseBtn>
        </STC.Box>
        <UserNav />
        <LogoutBtn />
      </STC.Container>
      {isMobalMenuOpen && <STC.Overlay onClick={() => closeMobalMenu(false)} />}
    </>
  );
};
