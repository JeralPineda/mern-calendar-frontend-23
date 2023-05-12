import calendarApi from '../../src/api/calendarApi';

/* eslint-disable no-undef */
describe('Pruebas en el calendarApi', () => {
  test('Debe de tener la configuración por defecto de Axios', () => {
    // console.log(calendarApi);
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test('debe de tener el x-token en el header de todas las peticiones', async () => {
    const token = 'ABC-1123';
    localStorage.setItem('token', token);
    const resp = await calendarApi.get('/auth');
    // console.log(resp.config.headers['x-token']);

    expect(resp.config.headers['x-token']).toBe(token);
  });
});
