import Image from 'next/image';
import styles from './styles.module.scss';

import ourObjectiveImage from '../../../../../public/images/image2.png';

const OurObjective = () => {
  return (
    <div className={styles.container}>
      <Image src={ourObjectiveImage} alt='People working together' />
      <div className={styles.objective}>
        <h1>
          NOSSO OBJETIVO <br /> É TE TORNAR <br /> UMA MÁQUINA <br /> DE VENDAS
        </h1>
        <button className={'mainButton high-emphasis-button'}>
          FALE CONOSCO
        </button>
        <p>
          Para que uma máquina de vendas funcione, temos <br /> um jeito
          autêntico de aplicar nossa estratégia, <br /> definidas em 3 passos:
        </p>
      </div>
    </div>
  );
};

export default OurObjective;
