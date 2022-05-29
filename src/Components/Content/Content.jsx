import styles from './Content.module.scss';
import Day from './Day';
import TrackItem from './TrackItem';
import React from 'react';

function Content({ arr }) {
  const ref = React.useRef(0);
  const dateData = [];
  const [columns, setColumns] = React.useState(2);
  const contentWidth = useWindowSize();

  if (contentWidth / columns > 70) {
    setColumns(columns + 1);
  }

  // Отслеживаем ширину контента
  function useWindowSize() {
    const [size, setSize] = React.useState(0);
    React.useLayoutEffect(() => {
      function updateSize() {
        setSize(ref.current.offsetWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  console.log(dateData);

  // создаем дату в зависимости от колонок
  const dtimeNums = (i) => {
    const obj = {
      weekday: 'weekday',
      day: 'day',
    };
    const today = new Date();
    today.setDate(today.getDate() - i);
    obj.weekday = today.toLocaleString('default', { weekday: 'short' });
    obj.day = today.toLocaleString('default', { day: 'numeric' });
    obj.full = today.getDate() + '/' + parseInt(today.getMonth() + 1) + '/' + today.getFullYear();
    return obj;
  };

  // добаваляем список дат в массив
  for (let i = 0; i < columns; i++) {
    dateData.push(dtimeNums(i));
  }

  dateData[0].weekday = 'Today';

  return (
    <div ref={ref} className={styles.content}>
      <div className={styles.header}>
        {dateData.map((obj, i) => (
          <Day key={i} {...obj} />
        ))}
      </div>

      <div className={styles.body}>
        {arr.map((obj, i) => (
          <ul key={i} className={styles.row}>
            {dateData.map((_, i) => (
              <TrackItem key={i} color={obj.color} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Content;
