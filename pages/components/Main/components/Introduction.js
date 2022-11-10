import Image from 'next/image';
import styles from '../styles.module.css';

import introductionImage from '../../../../public/images/image1.png';
import arrowRightImage from '../../../../public/images/insalearrows.png';
import arrowRight1Image from '../../../../public/images/insalearrows-1.png';

const Introduction = () => {
    return (
      <div id='main-introduction' className={styles.mainIntroduction}>
          <div
              id='main-introduction-message'
              className={styles.mainIntroductionMessage}
          >
              <p className={styles.mainIntroductionMessageText}>
              VAMOS LEVAR SUA EMPRESA PARA O PRÓXIMO NÍVEL
              </p>
              <button className='big-button high-emphasis-button'>
                  ENTRE EM CONTATO
              </button>
          </div>
          <Image
              src={introductionImage}
              alt='two people working together'
              className={styles.image}
          />
          <div className={styles.introductionArrowsContainer}>
              <Image className={styles.mainIntroductionMessageImage1} src={arrowRightImage} alt="arrow right" />
              <Image className={styles.mainIntroductionMessageImage2} src={arrowRight1Image} alt="arrow right" />
          </div>
          
      </div>
    );
  };

export default Introduction;
