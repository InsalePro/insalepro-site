import Image from "next/image";
import Link from "next/link";

import styles from"../Header/style.module.css";
import logo1 from "../../../public/images/logo1.png";
import menuIcon from "../Header/icons/menu.svg";
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const [ displayMenu, setDisplayMenu ] = useState(false);
    const navLinksContainerRef = useRef(null);
    const menuIconRef = useRef(null);

    // const displayMenuHandle = () => setDisplayMenu( !displayMenu );

    // useEffect: Giving an error at using the 'ref'. Tomorrow i'll fix it
    // useEffect( () => {
    //     if ( !displayMenu ) {
    //         menuIconRef.current.style.transform = "rotate(90deg)";
    //         navLinksContainerRef.current.style.transform = "translateX(0)";
    //     } else {
    //         navLinksContainerRef.current.style.transform = "translateX(100)"
    //     } 
    // }, [ displayMenu ] )

    return (
        <header id="header" className={styles.header}>
            <Image 
                src={logo1}
                alt="logo 1"
            />
            <nav className={styles.headerNav}>
                <Image src={ menuIcon } alt="Menu" ref={menuIconRef} className={styles.menuIcon} onClick={ () => displayMenuHandle() }/>
                <div ref={ navLinksContainerRef } className={styles.navLinksContainer}>
                    <Link href="#about-insalepro" className={ styles.navLink } >A InsalePRO</Link>
                    <Link href="#bitrix24" className={ styles.navLink }>Bitrix24</Link>
                    <Link href="#contact" id="nav-contact-button" className="button high-emphasis-button">Contato</Link>
                </div>
                
            </nav>
        </header>
    )
}


export default Header;