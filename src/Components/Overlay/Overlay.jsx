import styles from './Overlay.module.scss';

function Overlay({ closePopup }) {
  return <div onClick={() => closePopup()} className={styles.overlay}></div>;
}

export default Overlay;
