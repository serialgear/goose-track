import { NavLink } from 'react-router-dom';

export const UserNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/account">My account</NavLink>
        </li>
        <li>
          <NavLink to="/calendar">Calendar</NavLink>
        </li>
      </ul>
    </nav>
  );
};
