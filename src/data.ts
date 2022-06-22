import { Habit } from "./redux/habits/types";

export const habitsData: Habit[] = [
  {
    id: '1',
    title: 'Workout morning',
    color: 'blue',
    dateCreate: '10/07/2022',
    active: ['19/07/2022', '21/07/2022'],
    semiActive: ['12/07/2022', '15/07/2022', '17/07/2022'],
  },
  {
    id: '2',
    title: 'Eat',
    color: 'red',
    dateCreate: '12/07/2022',
    active: ['14/07/2022', '19/07/2022'],
    semiActive: ['13/07/2022', '15/07/2022', '16/07/2022'],
  },
  {
    id: '3',
    title: 'english',
    color: 'green',
    dateCreate: '15/07/2022',
    active: ['18/07/2022', '19/07/2022'],
    semiActive: ['16/07/2022', '17/07/2022', '21/07/2022'],
  },
]