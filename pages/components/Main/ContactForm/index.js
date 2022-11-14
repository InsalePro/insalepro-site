import styles from './styles.module.css';

function ContactForm() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          VAMOS TRABALHAR <br /> EM SEU PRÓXIMO <br /> PROJETO!
        </h1>
      </div>
      <div className={styles.content}>
        <div className={styles.contactInfo}></div>
      </div>
    </div>
  );
}

export default ContactForm;
