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

      <div className={styles.content}>
        <div className={styles.navigation}>
          <h2>Navegação</h2>
          <ul>
            <li>
              <a href='#'> A Insale Pro</a>
            </li>
            <li>
              <a href='#'>Máquina de Vendas</a>
            </li>
            <li>
              <a href='#'>Bitrix24</a>
            </li>
            <li>
              <a href='#'>Contato</a>
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2>Contato</h2>
          <ul>
            <li>(12) 97403-0277</li>
            <li>contato@insalepro.com</li>
          </ul>
        </div>

        <div className={styles.networks}>
          <h2> Nossas Redes</h2>
          <ul>
            <li>
              <a href='#'>Facebook</a>
            </li>
            <li>
              <a href='#'>Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
