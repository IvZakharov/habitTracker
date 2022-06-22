
export interface HabitsState {
  items: []
}

export type Habit = {
  id: string,
  title: string,
  dateCreate: string,
  color: string,
  active: string[],
  semiActive: string[],
}