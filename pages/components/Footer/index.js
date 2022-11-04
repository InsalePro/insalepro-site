import styles from './styles.module.css';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/logo2.png';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt='logo 2' />
      </div>
      <div className={styles.navigation}>Navegação</div>
      <div className={styles.contact}>Contato</div>
      <div className={styles.networks}>Nossas Redes</div>
    </footer>
  );
}

export default Footer;
