import styles from './Content.module.scss';
import Day from './Day';
import TrackItem from './TrackItem';
import React from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { habitsData } from '../../data';

function Content() {
  type dateObj = {
    weekday: string;
    day: string;
    full: string;
  };

  const arr = habitsData;

  const dateData: dateObj[] = [];
  const ref = React.useRef<HTMLDivElement>(null);
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
        if (ref.current) {
          setSize(ref.current.offsetWidth);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  // создаем дату в зависимости от колонок
  const dtimeNums = (i: number) => {
    const obj: dateObj = {
      weekday: 'weekday',
      day: 'day',
      full: '',
    };
    const today: Date = new Date();
    today.setDate(today.getDate() - i);
    obj.weekday = today.toLocaleString('default', { weekday: 'short' });
    obj.day = today.toLocaleString('default', { day: 'numeric' });
    obj.full = today.getDate() + '/' + today.getMonth() + 1 + '/' + today.getFullYear();
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
