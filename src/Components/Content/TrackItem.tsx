import styles from './Content.module.scss';
import React from 'react';

type Color = {
  color: string;
};

const TrackItem: React.FC<Color> = ({ color }) => {
  const [active, setActive] = React.useState(0);

  if (active > 2) {
    setActive(0);
  }

  return (
    <li
      onClick={() => setActive(active + 1)}
      className={`${styles.trackItem} ${color} ${active === 1 ? styles.active : ''} ${
        active === 2 ? styles.skip : ''
      }`}></li>
  );
};

export default TrackItem;
