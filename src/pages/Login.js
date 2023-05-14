import { LoginForm } from 'components/LoginForm/LoginForm';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading, selectAuthError } from 'redux/auth/selectors';

export default function Login() {
  const isLoading = useSelector(selectAuthIsLoading);
  const status = useSelector(selectAuthError);

  const onRegister = () => {
    if (
      status === 'Request failed with status code 400' &&
      isLoading === false
    ) {
      toast.error(
        'You have entered an incorrect email address or password, or you have not yet registered!'
      );
    }
  };
  return (
    <div>
      <title>Login</title>

      <LoginForm onData={onRegister} />
    </div>
  );
}
