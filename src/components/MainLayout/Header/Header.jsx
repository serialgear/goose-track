import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { HeaderStyled, HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <h2>Header Page name</h2>
      <HeaderWrapper>
        <ThemeToggler></ThemeToggler>
        <h2>HeaderLogo</h2>
      </HeaderWrapper>
    </HeaderStyled>
  );
};
