import {
  calendarSlice,
  onAddNewEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../../../src/store/calendar/calendarSlice';
import {
  calendarWithEventsState,
  events,
  initialState,
} from '../../fixtures/calendarStates';

/* eslint-disable no-undef */
describe('Pruebas en calendarSlice', () => {
  test('debe de regresar el estado por defecto', () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test('onSetActiveEvent debe de activar el evento', () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );
    expect(state.activeEvent).toEqual(events[0]);
  });

  test('onAddNewEvent debe de agregar el evento', () => {
    const newEvent = {
      id: '3',
      title: 'Aprender React y Next',
      notes: 'Planificar tiempo',
      start: new Date('2023-05-10 14:00:00'),
      end: new Date('2023-06-10 16:00:00'),
    };
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );
    // console.log(state);

    expect(state.events).toEqual([...events, newEvent]);
  });

  test('onUpdateEvent debe de actualizar el evento', () => {
    const updatedEvent = {
      id: '1',
      title: 'Cumpleaños de Jeral actualizado',
      notes: 'Nota actualizada',
      start: new Date('2023-05-12 14:00:00'),
      end: new Date('2023-05-12 16:00:00'),
    };
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updatedEvent)
    );

    expect(state.events).toContain(updatedEvent);
  });
});
