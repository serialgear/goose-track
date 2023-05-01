import * as STC from './NotFoundPage.styled';
import Img1 from '../../images/NotFoundPage/NotFoundPage1.png';
import Img2 from '../../images/NotFoundPage/NotFoundPage2.png';

export default function NotFoundPage() {
  return (
    <STC.Container>
      <STC.Img src={Img2} className="left" />
      <STC.Box>
        <STC.Title>404</STC.Title>
        <STC.Txt>Page not found</STC.Txt>
        <STC.BtnHome to="/">Go to home</STC.BtnHome>
      </STC.Box>
      <STC.Img src={Img1} className="right" />
    </STC.Container>
  );
}
