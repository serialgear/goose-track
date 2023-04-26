import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import {
  HeaderAvatarWrapper,
  HeaderStyled,
  HeaderWrapper,
  MobileMenuSvg,
  PageName,
  UserName,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/auth.selectors';
import { Link, useLocation } from 'react-router-dom';
import icon from '../../../images/sprite.svg';
import { Avatar } from '../Avatar/Avatar';
import gooseToDo from "../../../images/Goose-toDo-task.png"

export const Header = ({ openMobalMenu }) => {
  const name = useSelector(selectUserName);

  const location = useLocation();
  let isActivePage = location.pathname.split('/')[1];

  if (isActivePage === 'calendar') {
    isActivePage = 'Calendar';
  } else if (isActivePage === 'account') {
    isActivePage = 'User Profile';
  }

  return (
    <HeaderStyled>
      <div>
        <div>{false
      // toDoTask
       && <img src={gooseToDo} alt='Goose'/>}
      {<PageName>{isActivePage}</PageName>}</div>
      
      {false 
      // toDoTask
      && <p><span>Let go</span> of the past and focus on the present!</p>
      }
      </div>
      

      <MobileMenuSvg
        onClick={() => openMobalMenu(true)}
        aria-label="Toggle mobile menu"
      >
        <use xlinkHref={`${icon}#profile-mobile-menu`}></use>
      </MobileMenuSvg>

      <HeaderWrapper>
        <ThemeToggler></ThemeToggler>

        <UserName>{name.split(' ')[0]}</UserName>

       <Link to='/account'>
       <button
          type="button"
          //   onClick={openUserSmallInfo}
        >
          <HeaderAvatarWrapper>
            <Avatar />
          </HeaderAvatarWrapper>
        </button>
       </Link>
        
      </HeaderWrapper>
    </HeaderStyled>
  );
};
