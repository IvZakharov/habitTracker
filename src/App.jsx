import './scss/app.scss';
import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';
import Overlay from './Components/Overlay/Overlay';
import AddHabitPopup from './Components/Popups/AddHabitPopup';

function App() {
  const [habits, setHabits] = React.useState([
    {
      title: 'Workout morning',
      color: 'blue',
      trackers: [
        {
          date: '28/06/22',
          status: 'active',
        },
      ],
    },
    {
      title: 'English',
      color: 'purple',
      trackers: [
        {
          date: '24/06/22',
          status: 'skip',
        },
        {
          date: '28/06/22',
          status: 'active',
        },
      ],
    },
    {
      title: 'Strength workout',
      color: 'red',
    },
    {
      title: 'React JS class',
      color: 'green',
    },
    {
      title: 'Read the book',
      color: 'yellow',
    },
    {
      title: "Don't eat sweets",
      color: 'grey',
    },
  ]);

  const [colors, setColors] = React.useState([
    'purple',
    'red',
    'orange',
    'green',
    'yellow',
    'blue',
    'grey',
  ]);

  const [openPopup, setOpenPopup] = React.useState(false);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <main className="content">
          <Sidebar arr={habits} onClickNewButton={() => setOpenPopup(true)} />
          <Content arr={habits} />
        </main>
      </div>

      {openPopup && <AddHabitPopup allColors={colors} closePopup={() => setOpenPopup(false)} />}
      {openPopup && <Overlay closePopup={() => setOpenPopup(false)} />}
    </div>
  );
}

export default App;
