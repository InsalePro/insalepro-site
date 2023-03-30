import Image from 'next/image';
import styles from '../styles.module.css';

import ourClientsImage from '../../../../public/images/clients.png';

const OurClients = () => {
  return (
    <div className={styles.ourClientsContainer}>
      <div className={styles.ourClientsImageContainer}>
        <Image src={ourClientsImage} alt='Our clients' />
      </div>
      <p className={styles.ourClientsParagraph}>
        ADORADO POR NOSSOS CLIENTES ❤️
      </p>
    </div>
  );
};

export default OurClients;
