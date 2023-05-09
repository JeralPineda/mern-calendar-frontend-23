import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { clearErrorMessage, onLogout } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log({ email, password });

    try {
      const resp = await calendarApi.post('/auth', { email, password });
      console.log(resp?.data);
    } catch (error) {
      // console.log(error);
      dispatch(onLogout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 50);
    }
  };

  return {
    //* Propiedades
    status,
    user,
    errorMessage,

    //* Métodos
    startLogin,
  };
};
