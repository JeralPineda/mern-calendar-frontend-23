import { authSlice } from '../../../src/store/auth/authSlice';
import { initialState } from '../../fixtures/authStates';

/* eslint-disable no-undef */
describe('Pruebas en el authSlice', () => {
  test('debe de regresar el estado inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });
});
