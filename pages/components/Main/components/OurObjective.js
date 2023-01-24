import Image from 'next/image';
import styles from '../styles.module.css';

import ourObjectiveImage from '../../../../public/images/image2.png';

const OurObjective = () => {
  return (
    <div className={styles.ourObjectiveContainer}>
      <Image
        className={styles.ourObjectiveImage}
        src={ourObjectiveImage}
        alt='People working together'
      />
      <div className={styles.ourObjectiveTextContainer}>
        <p className={styles.ourObjectiveExplanationParagraph}>
          NOSSO OBJETIVO É TE TORNAR UMA MÁQUINA DE VENDAS
        </p>
        <button
          className={
            'big-button high-emphasis-button ' +
            styles.ourObjectiveContactButton
          }
        >
          FALE CONOSCO
        </button>
        <p className={styles.ourObjectiveAndOurStrategyParagraph}>
          Para que uma Máquina de vendas funcione, temos um jeito autêntico de
          aplicar nossa estratégia, definidas en 3 pasos:
        </p>
      </div>
    </div>
  );
};

export default OurObjective;
