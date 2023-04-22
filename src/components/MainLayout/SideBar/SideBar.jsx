import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
import { UserNav } from '../UserNav/UserNav';
import { Container } from './SideBar.styled';

export const SideBar = () => {
  return (
    <Container>
      <UserNav />
      <LogoutBtn />
    </Container>
  );
};
