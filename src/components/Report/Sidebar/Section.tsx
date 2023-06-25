import styles from '../styles.module.scss';

interface Props {
  title: string;
}

const Section = ({title}: Props) => {

  return (
    <div className={styles.sideSection}>
      {title}
    </div>
  );
};

export default Section;
