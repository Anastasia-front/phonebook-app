import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading, selectAuthError } from 'redux/auth/selectors';
import { useState, useEffect } from 'react';

export default function Register() {
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
      toast.success(
        'You or someone else is already registered with such data!'
      );
    }
  }, [isRequestPending, status, isLoading]);

  return (
    <div>
      <title>Registration</title>

      <RegisterForm />
    </div>
  );
}
