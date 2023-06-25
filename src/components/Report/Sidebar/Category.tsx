import Arrow from '@/components/Arrow';
import styles from '../styles.module.scss';
import { Children } from 'react';
import classnames from 'classnames';

interface Props {
  title: string;
  expanded?: boolean;
  onClick: () => void;
  calculated?: boolean;
  children: React.ReactNode;
}

const Category = ({title, expanded, onClick, calculated, children}: Props) => {
  const cls = classnames(styles.categoryTitle, {
    [styles.calcCategory]: calculated
  });

  return (
    <div className={styles.sideCategory}>
      <div className={cls} onClick={onClick}>
        <div className={styles.categoryTitleIcon}>
          { Children.count(children) > 0 && <Arrow toggle={!expanded} /> }
        </div>
        {title}
      </div>
      {expanded && children}
    </div>
  );
};

export default Category;
