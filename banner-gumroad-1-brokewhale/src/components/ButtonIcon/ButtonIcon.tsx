import cx from 'classnames';
import styles from './ButtonIcon.module.css';

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  className,
  ...props
}) => (
  <button className={cx(styles.buttonIcon, className)} {...props}>{icon}</button>
);
