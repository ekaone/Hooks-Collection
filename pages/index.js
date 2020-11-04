import Head from "next/head";
import styles from "../styles/Home.module.css";
// hooks
import UseBattery from "../hooks/useBattery";
import UseGeolocation from "../hooks/useGeolocation";
import UseLongPress from "../hooks/useLongPress";
import UseMedia from "../hooks/useMedia";
import UseStartTyping from "../hooks/useStartTyping";
import UseAudio from "../hooks/useAudio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          essential React Hooks by{" "}
          <a href="https://github.com/streamich/react-use" target="_blank">
            react-use
          </a>
        </h1>

        <p className={styles.description}>
          <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">
            hooks-intro
          </a>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 style={{ color: "blueviolet" }}>useBattery &rarr;</h3>
            <div>
              <UseBattery />
            </div>
          </div>

          <div className={styles.card}>
            <h3 style={{ color: "blueviolet" }}>useGeolocation &rarr;</h3>
            <div>
              <UseGeolocation />
            </div>
          </div>

          <div className={styles.card}>
            <h3 style={{ color: "blueviolet" }}>useLongPress &rarr;</h3>
            <div>Press button more long!</div>
            <div>
              <UseLongPress />
            </div>
          </div>

          <div className={styles.card}>
            <h3 style={{ color: "blueviolet" }}>useMedia &rarr;</h3>
            <div>Try resize screen</div>
            <div>
              <UseMedia />
            </div>
          </div>

          <div className={styles.card}>
            <h3 style={{ color: "blueviolet" }}>useStartTyping &rarr;</h3>
            <div></div>
            <div>
              <UseStartTyping />
            </div>
          </div>

          <div className={styles.card}>
            <h3 style={{ color: "blueviolet" }}>useAudio &rarr;</h3>
            <div></div>
            <div>
              <UseAudio />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
