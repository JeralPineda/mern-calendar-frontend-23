import {
  onCloseDateModal,
  onOpenDateModal,
  uiSlice,
} from '../../../src/store/ui/uiSlice';

/* eslint-disable no-undef */
describe('Pruebas en uiSlice', () => {
  test('debe de regresar el estado por defecto', () => {
    expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });
    // expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();
  });

  test('debe de cambiar el isDateModalOpen correctamente', () => {
    let state = uiSlice.getInitialState();

    //Abrir Modal
    state = uiSlice.reducer(state, onOpenDateModal());
    expect(state.isDateModalOpen).toBeTruthy();

    //Cerrar Modal
    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});
