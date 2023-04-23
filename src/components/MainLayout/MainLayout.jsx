import { Outlet } from 'react-router-dom';
import { Container, Main, SideBarWrapper, Wrapper } from './MainLayout.styled';
import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';

export const MainLayout = () => {
  return (
    <>
      <Container>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>

        <Wrapper>
          <Header />

          <Main>
            <Outlet />
          </Main>
        </Wrapper>
      </Container>
    </>
  );
};
