import Image from 'next/image';

import styles from './styles.module.css';
import introductionImage from '../../../public/images/image1.png';
import arrowRightImage from '../../../public/images/insalearrows-1.png';

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
        <div className={styles.introductionArrowsContainer}>
            <Image className={styles.mainIntroductionMessageImage1} src={arrowRightImage} alt="arrow right" />
            <Image className={styles.mainIntroductionMessageImage2} src={arrowRightImage} alt="arrow right" />
        </div>
        
    </div>
  );
};
const WhoWeAre = () => {
    return (
        <p className={styles.whoWeAre}>
            Somos um time altamente motivado e focado en gerar soluções simples e escaláveis para problemas de negócios concretos.
            Nosso propósito é organizar e simplificar procesos, atendemos pequenas e médias empresas que precisam vender mais e se estruturar para  
            crescer constantemente nos mais variados segmentos de atuação.
        </p>
    )
}
const Main = () => {
  return (
    <main>
      <Introduction />
      <WhoWeAre />
    </main>
  );
};

export default Main;
