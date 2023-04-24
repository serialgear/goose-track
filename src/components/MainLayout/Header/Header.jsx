import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import {
  HeaderStyled,
  HeaderWrapper,
  MobileMenuSvg,
  PageName,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/auth.selectors';
import { useLocation } from 'react-router-dom';
import icon from '../../../images/sprite.svg';

export const Header = ({ openMobalMenu }) => {
  // const dispath = useDispatch();
  const name = useSelector(selectUserName);

  const location = useLocation();

  // console.log(location.state);

  // const handlLogOut =()=>{
  //     dispath(logOut())
  // }

  return (
    <HeaderStyled>
      {<PageName>{}PageName</PageName>}

      <MobileMenuSvg
        onClick={() => openMobalMenu(true)}
        aria-label="Toggle mobile menu"
      >
        <use xlinkHref={`${icon}#profile-mobile-menu`}></use>
      </MobileMenuSvg>

      <HeaderWrapper>
        <ThemeToggler></ThemeToggler>

        <h2>{name.split(' ')[0]}</h2>

        <button
          type="button"
          //   onClick={handleUserSmallInfo}
        >
          <img
            width="44"
            height="44"
            src="https://img.icons8.com/arcade/64/null/rick-sanchez.png"
            alt="user"
          />
        </button>
      </HeaderWrapper>
    </HeaderStyled>
  );
};
