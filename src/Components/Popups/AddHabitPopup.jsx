import styles from './Popups.module.scss';
import React from 'react';

function AddHabitPopup({ allColors, closePopup }) {
  const [colorActive, setColorActive] = React.useState(0);

  console.log(colorActive);

  return (
    <div className={styles.popup}>
      <div className={styles.header}>
        <h3 className={styles.title}>Edit habits</h3>
        <button onClick={() => closePopup()} className={styles.closePopup}>
          <span>Close</span>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.5807 0.919325C14.3121 0.650831 13.9479 0.5 13.5681 0.5C13.1884 0.5 12.8241 0.650831 12.5556 0.919325L7.49135 5.98354L2.42714 0.919325C2.15703 0.65844 1.79526 0.514084 1.41974 0.517347C1.04423 0.52061 0.685017 0.671232 0.419477 0.936771C0.153938 1.20231 0.00331783 1.56152 5.43594e-05 1.93703C-0.00320911 2.31255 0.141148 2.67432 0.402032 2.94444L5.46624 8.00865L0.402032 13.0729C0.141148 13.343 -0.00320911 13.7047 5.43594e-05 14.0803C0.00331783 14.4558 0.153938 14.815 0.419477 15.0805C0.685017 15.3461 1.04423 15.4967 1.41974 15.4999C1.79526 15.5032 2.15703 15.3589 2.42714 15.098L7.49135 10.0338L12.5556 15.098C12.8257 15.3589 13.1875 15.5032 13.563 15.4999C13.9385 15.4967 14.2977 15.3461 14.5632 15.0805C14.8288 14.815 14.9794 14.4558 14.9827 14.0803C14.9859 13.7047 14.8416 13.343 14.5807 13.0729L9.51646 8.00865L14.5807 2.94444C14.8492 2.67586 15 2.31164 15 1.93188C15 1.55212 14.8492 1.1879 14.5807 0.919325Z"
              fill="#171930"
            />
          </svg>
        </button>
      </div>

      <div className={styles.content}>
        <div className="mb-35 field">
          <input type="text" name="text" autoComplete="off" placeholder="Habit" />
        </div>
        <div className={styles.colors}>
          <h4 className={styles.subtitle}>Pick color</h4>
          <ul className={styles.colorList}>
            {allColors.map((item, i) => (
              <li
                key={i}
                onClick={() => setColorActive(i)}
                className={`${item} ${colorActive === i ? styles.active : ''}`}></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.buttons}>
          <button onClick={() => closePopup()} className="button button--secondary-transparent">
            Cancel
          </button>
          <button className="button">Save</button>
        </div>
      </div>
    </div>
  );
}

export default AddHabitPopup;
