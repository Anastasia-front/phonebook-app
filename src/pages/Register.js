import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading, selectAuthError } from 'redux/auth/selectors';

export default function Register() {
  const isLoading = useSelector(selectAuthIsLoading);
  const status = useSelector(selectAuthError);
  const onRegister = () => {
    if (
      status === 'Request failed with status code 400' &&
      isLoading === false
    ) {
      toast.success('You are already authorized!');
    }
  };

  return (
    <div>
      <title>Registration</title>

      <RegisterForm onData={onRegister} />
    </div>
  );
}
