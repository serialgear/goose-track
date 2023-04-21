import { Outlet } from 'react-router-dom';
import { Container } from './MainLayout.styled';

export const MainLayout = () => {
  return (
    <Container>
      <h2>Header</h2>
      <h2>SideBar</h2>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
