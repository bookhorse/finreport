import classnames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  toggle?: boolean;
}

const Arrow = ({toggle, ...restProps}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const cls = classnames(styles.arrow, {
    [styles.rotateRight]: toggle
  });

  return <div className={cls} {...restProps}></div>;
};

export default Arrow;
