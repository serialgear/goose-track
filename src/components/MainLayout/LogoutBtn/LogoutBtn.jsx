import * as STC from './LogoutBtn.styled';
import Icons from '../../../images/sprite.svg';

export const LogoutBtn = () => {
  return (
    <STC.Btn>
      <STC.Txt>Log out</STC.Txt>
      <STC.Svg>
        <use href={`${Icons}#logout-door-sf`} />
      </STC.Svg>
    </STC.Btn>
  );
};
