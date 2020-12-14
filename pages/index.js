import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}></div>
      <Head>
        <title>Dane Harnett</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dane Harnett</h1>

        <p className={styles.description}>
          Product developer trying to build cool software while learning new
          stuff along the way. #GrowthAndExcellence
        </p>

        <div className={styles.grid}>
          <a href="/about-me" className={styles.card}>
            <h3>About me &rarr;</h3>
          </a>

          <a href="/my-projects" className={styles.card}>
            <h3>My projects &rarr;</h3>
          </a>

          <a
            href="https://youtube.com/daneharnett"
            target="_blank"
            className={styles.card}
          >
            <h3>YouTube &rarr;</h3>
          </a>

          <a
            href="http://twitch.tv/daneharnett"
            target="_blank"
            className={styles.card}
          >
            <h3>Twitch &rarr;</h3>
          </a>

          <a
            href="https://github.com/dane-harnett"
            target="_blank"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
          </a>

          <a
            href="https://twitter.com/daneharnett"
            target="_blank"
            className={styles.card}
          >
            <h3>Twitter &rarr;</h3>
          </a>
        </div>
      </main>
    </div>
  );
}
