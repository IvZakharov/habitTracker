import './scss/app.scss';
import React from 'react';
// import { Header } from './Components/Header/Header';
import { Header } from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';
import Overlay from './Components/Overlay/Overlay';
import AddHabitPopup from './Components/Popups/AddHabitPopup';

function App() {
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
          <Sidebar onClickNewButton={() => setOpenPopup(true)} />
          <Content />
        </main>
      </div>

      {openPopup && <AddHabitPopup allColors={colors} closePopup={() => setOpenPopup(false)} />}
      {openPopup && <Overlay closePopup={() => setOpenPopup(false)} />}
    </div>
  );
}

export default App;
