import styles from './Card.module.css';

export const Card: React.FC = ({
  children
}) => (
  <div className={styles.card}>{children}</div>
);
