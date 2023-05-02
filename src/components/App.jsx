import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout/MainLayout';
import { RestrictedRoute } from './AuthRouts/RestrictedRoute';
import { PrivateRoute } from './AuthRouts/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChoosedMonth from './ChoosedMonth/ChoosedMonth';
import ChoosedDay from './ChoosedDay/ChoosedDay';
const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback="">
        <Routes>
          <Route>
            <Route path="" element={<RestrictedRoute />}>
              <Route index element={<StartPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="" element={<PrivateRoute />}>
              <Route path="" element={<MainLayout />}>
                <Route path="calendar" element={<CalendarPage />}>
                  <Route path="month/:currentDate" element={<ChoosedMonth />} />
                  <Route path="day/:currentDay" element={<ChoosedDay />} />
                </Route>
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
