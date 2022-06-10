import { IconHelp } from 'components';
import { ReactComponent as Logo } from './Logo.svg';
import { ButtonIcon } from 'components/ButtonIcon';

import styles from './Header.module.css';

export const Header: React.FC = () => (
  <div className={styles.header}>
    <div className={styles.logoContainer}>
      <div className={styles.logoImgContainer}>
        <div className={styles.logoImg}><Logo /></div>
      </div>
      <p className={styles.logoName}>Litebulb</p>
    </div>
    <div className={styles.menu}>
      <ButtonIcon icon={<IconHelp />} onClick={() => null} className={styles.help} />
      <ButtonIcon icon={<div className={styles.user}>JS</div>} onClick={() => null} />
    </div>
  </div>
);
