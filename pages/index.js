import styles from '../styles/Home.module.css'

const Home = () => {
    const showPage = () => {
        return (
            <main className={styles.main}>
                <p className={styles.description}>
                    Get started by editing{' '}<code className={styles.code}>pages/index.js</code>
                </p>
            </main>
        )
    }
    const showHelloWorld = () => {
        return(

            <main className={styles.main}>
                <p className={styles.description}>hello world!!!</p>
            </main>

        );
    }

    return showHelloWorld();
}

export default Home;
