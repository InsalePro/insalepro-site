import Image from 'next/image';
import styles from './styles.module.scss';
import integrations from '../../../../../public/images/integrations.png';

function ApplyNow() {
  return (
    <div className={styles.container}>
      <h1>
        Desenvolvemos a integração Bitrix24 que seu negócio precisa. Se o seu
        software tem a <br />
        possibilidade de integração de aplicativos, vamos conectá-lo e adaptá-lo
        ao Bitrix24.
      </h1>
      <Image src={integrations} alt='integrations' />
      <button className='mainButton high-emphasis-button'>APLICAR AGORA</button>
    </div>
  );
}

export default ApplyNow;
