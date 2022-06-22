import styles from './Content.module.scss';

type DayProps = {
  weekday: string;
  day: string;
};

const Day: React.FC<DayProps> = ({ weekday, day }) => {
  return (
    <div className={styles.dateBlock}>
      <span>{weekday}</span>
      <b>{day}</b>
    </div>
  );
};

export default Day;
