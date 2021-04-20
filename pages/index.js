import styles from '../styles/Home.module.css'
import schema from '../schema/source/schema1.json'
import {validateWithSchema, validateWithSchema2} from '../enums/tools'

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

    const validate = () => {
        if(
            validateWithSchema(
                'payloadCity',
                {
                    city: "LPZ"
                }
            )
        ) {
            return showPage()
        }

        return showHelloWorld()
    }

    return validate()
}

export default Home;
