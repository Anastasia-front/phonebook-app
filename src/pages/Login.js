import { LoginForm } from 'components/LoginForm/LoginForm';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading, selectAuthError } from 'redux/auth/selectors';
import { useState, useEffect } from 'react';

export default function Login() {
  const isLoading = useSelector(selectAuthIsLoading);
  const status = useSelector(selectAuthError);
  const [isRequestPending, setRequestPending] = useState(true);

  useEffect(() => {
    setRequestPending(false);

    if (
      status === 'Request failed with status code 400' &&
      !isRequestPending &&
      !isLoading
    ) {
      toast.error(
        'You have entered an incorrect email address or password, or you have not yet registered!'
      );
    }
  }, [isRequestPending, status, isLoading]);

  return (
    <div>
      <title>Login</title>

      <LoginForm />
    </div>
  );
}
