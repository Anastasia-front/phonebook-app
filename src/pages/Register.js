import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export default function Register() {
  const dispatch = useDispatch();
  const status = useSelector(selectAuthError);

  const onRegister = data => {
    if (status === 'Request failed with status code 400') {
      toast.success(
        'You or someone else is already registered with such data!'
      );
    }
    dispatch(register(data));
  };

  return (
    <div>
      <title>Registration</title>

      <RegisterForm onData={onRegister} />
    </div>
  );
}
