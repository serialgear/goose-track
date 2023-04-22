import { Outlet } from 'react-router-dom';
import {
  Container,
  Main,
  SideBarWrapper,
  HeaderWrapper,
  Wrapper,
} from './MainLayout.styled';
import { SideBar } from './SideBar/SideBar';

export const MainLayout = () => {
  return (
    <>
      <Container>
        <SideBarWrapper>
          {/*// Можна вставляти або замінювати весь компонент на SideBar*/}
          <SideBar />
        </SideBarWrapper>

        <Wrapper>
          <HeaderWrapper>
            {/*// Можна замінювати весь компонент на Header*/}
            <h2>Header Page name</h2>
            <h2>HeaderLogo</h2>
          </HeaderWrapper>

          <Main>
            <Outlet />
          </Main>
        </Wrapper>
      </Container>
    </>
  );
};
