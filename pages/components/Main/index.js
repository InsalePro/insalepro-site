import Image from 'next/image';

import styles from './styles.module.css';
import introductionImage from '../../../public/images/image1.png';
import arrowRightImage from '../../../public/images/insalearrows.png';
import arrowRight1Image from '../../../public/images/insalearrows-1.png';
import ourClientsImage from '../../../public/images/clients.png'
import ourObjectiveImage from '../../../public/images/image2.png'

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
            <Image className={styles.mainIntroductionMessageImage2} src={arrowRight1Image} alt="arrow right" />
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
const OurClients = () => {
    return (
        <div className={styles.ourClientsContainer}> 
            <Image className={styles.ourClientsImage} src={ourClientsImage} alt="Our clients" />
            <p className={styles.ourClientsParagraph}>ADORADO POR NOSSOS CLIENTES ❤️</p>
        </div>
    )
}
// I'm still working on this component
const OurObjective = () => {
    return (
        <div className={styles.ourObjectiveContainer}>
            <Image className={styles.ourObjectiveImage} src={ourObjectiveImage} alt="People working together" />
            <div className={styles.ourObjectiveTextContainer}>
                <p className={styles.ourObjectiveExplanationParagraph}>
                    NOSSO OBJETIVO É TE TORNAR UMA MÁQUINA DE VENDAS
                </p>
                <button className="button high-emphasis-button">FALE CONOSCO</button>
                <p className={styles.ourObjectiveAndOurStrategyParagraph} >Para que uma Máquina de vendas funcione, temos um jeito autêntico de aplicar nossa estratégia, definidas en 3 pasos:</p>
            </div>
        </div>
    )
}
const Main = () => {
  return (
    <main>
      <Introduction />
      <WhoWeAre />
      <OurClients />
      <OurObjective />
    </main>
  );
};

export default Main;
