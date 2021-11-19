import styles from '../styles/Contact.module.css'
import Circle from '../components/Circle'
import Head from 'next/head'

const contact = () => {
    return (
        <>
        <Head>
        <title>Contact Us</title>
        <meta name="description" content="You can contact Avocado Agency here" />
        </Head>
        <div className={styles.container}>
            <Circle background='green' left='-40vh' top='-20vh' />
            <Circle background='yellow' right='-30vh' bottom='-60vh' />
            <h1 className={styles.title}>GET IN TOUCH</h1>
            <form className={styles.form}>
                <input className={styles.inputS} placeholder='Username' />
                <input className={styles.inputS} placeholder='Phone' />
                <input className={styles.inputL} placeholder='Email' />
                <input className={styles.inputL} placeholder='Subject' />
                <textarea className={styles.textArea} placeholder='Message' rows={6} />
                <button className={styles.button}>SUBMIT</button>
            </form>
        </div>
        </>
    )
}

export default contact
