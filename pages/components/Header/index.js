import Image from 'next/image';
import Link from 'next/link';

import logo1 from '../../../public/images/logo1.png';

function Header() {
  return (
    <header>
      <Image src={logo1} alt='logo 1' />
      <nav>
        <Link href='#about-insalepro'>A InsalePRO</Link>
        <Link href='#bitrix24'>Bitrix24</Link>
        <Link href='#contact'>Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
