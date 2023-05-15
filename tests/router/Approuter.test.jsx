import { render, screen } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { AppRouter } from '../../src/router/AppRouter';

/* eslint-disable no-undef */
jest.mock('../../src/hooks/useAuthStore');

describe('Pruebas en <AppRouter />', () => {
  const mockCheckAuthtoken = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar la pantalla de carga y llamar checkAuthToken', () => {
    useAuthStore.mockReturnValue({
      status: 'checking',
      checkAuthToken: mockCheckAuthtoken,
    });

    render(<AppRouter />);
    // screen.debug();

    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(mockCheckAuthtoken).toHaveBeenCalled();
  });
});
