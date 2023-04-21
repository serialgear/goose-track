import { Outlet } from 'react-router-dom';
import {
  Container,
  Main,
  SideBarWrapper,
  HeaderWrapper,
  Wrapper,
} from './MainLayout.styled';

export const MainLayout = () => {
  return (
    <>
      <Container>
        <SideBarWrapper>
          {/*// Можна вставляти або замінювати весь компонент на SideBar*/}
          <h1>Sidebar</h1>
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
