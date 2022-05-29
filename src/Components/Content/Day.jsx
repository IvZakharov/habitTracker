import styles from './Content.module.scss';

function Day({ weekday, day }) {
  return (
    <div className={styles.dateBlock}>
      <span>{weekday}</span>
      <b>{day}</b>
    </div>
  );
}

export default Day;
