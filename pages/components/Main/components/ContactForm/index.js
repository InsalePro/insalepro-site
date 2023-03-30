import Image from 'next/image';

import phoneImage from '../../../../../public/images/phone.png';
import emailImage from '../../../../../public/images/email.png';
import locationImage from '../../../../../public/images/location.png';

import styles from './styles.module.scss';

function ContactForm() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          VAMOS TRABALHAR <br /> EM SEU PRÓXIMO <br /> PROJETO!
        </h1>

        <div className={styles.dataContent}>
          <div>
            <div className={styles.content}>
              <Image className={styles.img} src={phoneImage} alt='phone' />

              <div className={styles.text}>
                Telefone
                <br />
                <span>(12) 97403-0277</span>
              </div>
            </div>
            <div className={styles.content}>
              <Image className={styles.img} src={emailImage} alt='phone' />

              <div className={styles.text}>
                E-mail
                <br />
                <span>contato@insalepro.com</span>
              </div>
            </div>
            <div className={styles.content}>
              <Image className={styles.img} src={locationImage} alt='phone' />
              <div className={styles.text}>
                Endereço
                <br />
                <span>
                  R. São Caetano do Sul, 430 <br />
                  Jardim Alvorada São José dos Campos - SP <br />
                  12240-510
                </span>
              </div>
            </div>
          </div>

          <div className={styles.formContent}>
            <div action='' className={styles.form}>
              {typeof document !== 'undefined' && (
                <script
                  data-b24-form='inline/11/n9r51y'
                  data-skip-moving='true'
                >
                  {(function () {
                    var s = document.createElement('script');
                    s.async = true;
                    s.src =
                      'https://cdn.bitrix24.com/b16033663/crm/form/loader_11.js' +
                      '?' +
                      ((Date.now() / 180000) | 0);
                    var h = document.getElementsByTagName('script')[0];
                    h.parentNode.insertBefore(s, h);
                  })()}
                </script>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
