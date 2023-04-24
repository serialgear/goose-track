import { Outlet } from 'react-router-dom';
import { Container, Main, Wrapper } from './MainLayout.styled';
import { Header } from './Header/Header';
import { useState } from 'react';
import { SideBar } from './SideBar/SideBar';

export const MainLayout = () => {
  const [isMobalMenuOpen, setIsMobalMenuOpen] = useState(false);

  return (
    <>
      <Container>
        <SideBar
          isMobalMenuOpen={isMobalMenuOpen}
          closeMobalMenu={setIsMobalMenuOpen}
        />

        <Wrapper>
          <Header openMobalMenu={setIsMobalMenuOpen} />

          <Main>
            <Outlet />
          </Main>
        </Wrapper>
      </Container>
    </>
  );
};
