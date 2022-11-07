import Image from 'next/image';

import styles from './styles.module.css';
import introductionImage from '../../../public/images/image1.png';

// I'm adding the '>>' to the Image
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
        <button className='button high-emphasis-button'>
          ENTRE EM CONTATO
        </button>
      </div>
      <Image
        src={introductionImage}
        alt='two people working together'
        className={styles.image}
      />
      {/* <div className={ styles.introductionDrawingDiv }>&gt;</div> */}
    </div>
  );
};
const Main = () => {
  return (
    <main>
      <Introduction />
    </main>
  );
};

export default Main;
