import styles from './Sidebar.module.scss';

function Sidebar({ arr, onClickNewButton }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Habits</h2>

      <ul className={styles.habits}>
        {arr.map((obj, i) => (
          <li key={i}>{obj.title}</li>
        ))}
      </ul>

      <button
        onClick={() => onClickNewButton()}
        className={`${styles.addHabit} button button--transparent`}>
        + new habit
      </button>
    </div>
  );
}

export default Sidebar;
