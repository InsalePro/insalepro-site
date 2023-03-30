import Image from 'next/image';
import styles from './styles.module.scss';

import ourSpecialityImage from '../../../../../public/images/image3.png';

const OurSpeciality = () => {
  return (
    <div className={styles.container}>
      <div className={styles.specialty}>
        <h1>
          SOMOS <br /> ESPECIALISTAS <br />
          EM BITRIX24
        </h1>
        <button className='mainButton high-emphasis-button'>
          FALE CONOSCO
        </button>
        <p>
          Nós somos parceiros oficiais do CRM n° 1 do mundo, o Bitrix24.
          <br />
          Implementamos, configuramos, treinamos o seu pessoal e mais.
        </p>
      </div>
      <Image src={ourSpecialityImage} alt='People working together' />
    </div>
  );
};

export default OurSpeciality;
