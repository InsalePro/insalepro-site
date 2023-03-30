import Image from 'next/image';
import styles from './styles.module.scss';

import introductionImagesGroup from '../../../../../public/images/intro-group.png';

import introductionImage from '../../../../../public/images/image1.png';
import arrowRightImage from '../../../../../public/images/insalearrows.png';
import arrowRight1Image from '../../../../../public/images/insalearrows-1.png';
import officialPartnerImage from '../../../../../public/images/official-partner.svg';

const Introduction = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.officialPartner}>
        <Image
          className={styles.officialPartnerImage}
          src={officialPartnerImage}
          alt='official partner'
        />
        <span className={styles.officialPartnerText}>Parceiro Oficial</span>
      </div> */}

      <div className={styles.introduction}>
        <div className={styles.introductionContent}>
          <h1>
            VAMOS LEVAR <br /> SUA EMPRESA <br /> PARA O <br /> PRÓXIMO NÍVEL
          </h1>
          <button className='mainButton high-emphasis-button'>
            ENTRE EM CONTATO
          </button>
        </div>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.image}
            src={introductionImagesGroup}
            alt='two people working together'
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
