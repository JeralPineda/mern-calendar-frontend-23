import {
  authSlice,
  clearErrorMessage,
  onLogin,
  onLogout,
} from '../../../src/store/auth/authSlice';
import { authenticatedState, initialState } from '../../fixtures/authStates';
import { testUserCredentials } from '../../fixtures/testUser';

/* eslint-disable no-undef */
describe('Pruebas en el authSlice', () => {
  test('debe de regresar el estado inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('debe de realizar un login', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
    // console.log(state);

    expect(state).toEqual({
      status: 'authenticated',
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test('debe de realizar el logout', () => {
    const state = authSlice.reducer(authenticatedState, onLogout());

    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined,
    });
  });

  test('debe de realizar el logout con mensaje de error', () => {
    const errorMessage = 'Credenciales no validas';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: errorMessage,
    });
  });

  test('debe de limpiar el mensaje de error', () => {
    const errorMessage = 'Credenciales no validas';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    const newState = authSlice.reducer(state, clearErrorMessage());
    // console.log(newState);

    expect(newState.errorMessage).toBe(undefined);
  });
});
