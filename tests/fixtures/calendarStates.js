export const events = [
  {
    id: '1',
    title: 'Cumpleaños del Jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date('2023-05-12 14:00:00'),
    end: new Date('2023-05-12 16:00:00'),
  },
  {
    id: '2',
    title: 'Cumpleaños de Juanita',
    notes: 'Comprar regalo',
    start: new Date('2023-05-10 14:00:00'),
    end: new Date('2023-05-10 16:00:00'),
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
