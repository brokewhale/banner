import cx from 'classnames';
import { Button, IconAdd, IconBriefcase, IconFolder, IconGear, IconHome, IconPeople } from 'components';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './Sidebar.module.css';

interface LinkProps {
  name: string;
  icon:JSX.Element;
  path: string;
  active: boolean;
}

const Links: LinkProps[] = [{
  name: 'Home',
  icon: <IconHome />,
  path: '/',
  active: true,
}, {
  name: 'Candidates',
  icon: <IconPeople />,
  path: '/candidates',
  active: false,
}, {
  name: 'Library',
  icon: <IconFolder />,
  path: '/library',
  active: false,
}, {
  name: 'Interviews',
  icon: <IconBriefcase />,
  path: '/interviews',
  active: false,
}, {
  name: 'Settings',
  icon: <IconGear />,
  path: '/settings',
  active: false,
}]

export const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleCreateInterview = () => navigate('interviews');

  return (
    <div className={styles.sidebar}>
      <Button block iconPrefix={<IconAdd />} onClick={handleCreateInterview} className={styles.cta}>
        Create Interview
      </Button>
      <nav>
        {Links.map((link) => (
          <Link to={link.path} key={link.name} className={cx(styles.sidebarItem, {
            [styles.sidebarItemActive]: pathname === link.path
          })}>
            <div className={styles.sidebarIcon}>{link.icon}</div>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
