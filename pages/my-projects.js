import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function MyProjects() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}></div>
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dane Harnett</h1>

        <p className={styles.description}>My projects... coming soon...</p>
      </main>
    </div>
  );
}
