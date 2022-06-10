import cx from 'classnames';
import React from 'react';

import styles from './Title.module.css';

type titleAs = 'h1' | 'h2' | 'h3' | 'h4';

interface TitleProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  as?: titleAs;
}

export const Title: React.FC<TitleProps> = ({
  as = 'h1',
  ...props
}) => {
  const element = React.createElement(as, {...props, className: cx(props.className, styles.title, {
    [styles[as]]: as
  })})
  return element;
};
