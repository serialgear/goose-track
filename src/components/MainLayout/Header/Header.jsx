import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import {
  AvatarImg,
  AvatarSvg,
  HeaderStyled,
  HeaderWrapper,
  MobileMenuSvg,
  PageName,
  UserName,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { selectUserAvatarURL, selectUserName } from 'redux/auth/auth.selectors';
import { useLocation } from 'react-router-dom';
import icon from '../../../images/sprite.svg';

export const Header = ({ openMobalMenu }) => {
  const name = useSelector(selectUserName);
  const avatarUrl = useSelector(selectUserAvatarURL);

  const location = useLocation();
  let isActivePage = location.pathname.split('/')[1];

  if (isActivePage === 'calendar') {
    isActivePage = 'Calendar';
  } else if (isActivePage === 'account') {
    isActivePage = 'User Profile';
  }

  return (
    <HeaderStyled>
      {<PageName>{isActivePage}</PageName>}

      <MobileMenuSvg
        onClick={() => openMobalMenu(true)}
        aria-label="Toggle mobile menu"
      >
        <use xlinkHref={`${icon}#profile-mobile-menu`}></use>
      </MobileMenuSvg>

      <HeaderWrapper>
        <ThemeToggler></ThemeToggler>

        <UserName>{name.split(' ')[0]}</UserName>

        {avatarUrl ? (
          <button
          //   onClick={openUserSmallInfo}
          >
            <AvatarImg src={avatarUrl} alt="user" />
          </button>
        ) : (
          <AvatarSvg
          //    onClick={openUserSmallInfo}
          >
            <use xlinkHref={`${icon}#profile-avatar-f`}></use>
          </AvatarSvg>
        )}
      </HeaderWrapper>
    </HeaderStyled>
  );
};
