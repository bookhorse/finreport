import Head from 'next/head';
import Report from '@/components/Report';
import styles from '@/styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.app}>
      <Head>
        <title>Financial report</title>
      </Head>
      <Report />
    </div>
  );
};

export default Home;
