import Image from 'next/image';
import Link from 'next/link';

import styles from '../Header/styles.module.css';
import logo1 from '../../../public/images/logo1.png';
import menuIcon from '../Header/icons/menu.svg';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const displayMenuHandle = () => setDisplayMenu( !displayMenu );

  useEffect( () => {
      const menuIconRef = document.querySelector("#menu-icon");
      const navLinksContainerRef = document.querySelector("#nav-links-container");

      if (window.innerWidth <= 757) {
          if ( !displayMenu ) {
              menuIconRef.style.transform = "rotate(0)";
              navLinksContainerRef.style.transform = "translateX(100%)";
          } else {
              menuIconRef.style.transform = "rotate(45deg)";
              navLinksContainerRef.style.transform = "translateX(0)"
          }
      }
      
  }, [ displayMenu ] )

  return (
    <header id='header' className={styles.header}>
      <Image src={logo1} alt='logo 1' />
      <nav className={styles.headerNav}>
        <Image
          src={menuIcon}
          alt='Menu'
          id="menu-icon"
          className={styles.menuIcon}
          onClick={() => displayMenuHandle()}
        />
        <div id="nav-links-container" className={styles.navLinksContainer}>
          <Link href='#about-insalepro' className={styles.navLink}>
            A InsalePRO
          </Link>
          <Link href='#bitrix24' className={styles.navLink}>
            Bitrix24
          </Link>
          <Link
            href='#contact'
            id='nav-contact-button'
            className='button high-emphasis-button'
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
