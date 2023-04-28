import { useDispatch } from 'react-redux';
import { UserForm } from './UserForm/UserForm';
import { refreshUser } from 'redux/auth/auth.operations';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function AccountPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(refreshUser());
    } catch (error) {
      toast.error('Authorization error');
    }
  }, [dispatch]);

  return (
    <>
      <UserForm />
    </>
  );
}
