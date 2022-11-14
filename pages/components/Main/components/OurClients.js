import Image from 'next/image';
import styles from '../styles.module.css';

import ourClientsImage from '../../../../public/images/clients.png'


const OurClients = () => {
    return (
        <div className={styles.ourClientsContainer}> 
            <Image className={styles.ourClientsImage} src={ourClientsImage} alt="Our clients" />
            <p className={styles.ourClientsParagraph}>ADORADO POR NOSSOS CLIENTES ❤️</p>
        </div>
    )
}

export default OurClients;