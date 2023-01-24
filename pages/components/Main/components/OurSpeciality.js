import Image from 'next/image';
import styles from '../styles.module.css';

import ourSpecialityImage from '../../../../public/images/image3.png';

const OurSpeciality = () => {
  return (
    <div className={styles.ourSpecialityContainer}>
      <div className={styles.ourSpecialityTextContainer}>
        <p className={styles.ourSpecialityExplanationParagraph}>
          SOMOS ESPECIALISTAS EM BITRIX24
        </p>
        <button
          className={
            'big-button high-emphasis-button ' +
            styles.ourSpecialityContactButton
          }
        >
          FALE CONOSCO
        </button>
        <p className={styles.ourSpecialityBitrixPartnership}>
          Nós somos parceiros oficiais do CRM n° 1 do mundo, o Bitrix24.
          <br />
          Implementamos, configuramos, treinamos o seu pessoal e mais.
        </p>
      </div>
      <Image
        className={styles.ourSpecialityImage}
        src={ourSpecialityImage}
        alt='People working together'
      />
    </div>
  );
};

export default OurSpeciality;
