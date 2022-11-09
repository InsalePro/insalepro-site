import Image from 'next/image';

import styles from './styles.module.css';

import ourRocketStrategyImage from '../../../public/images/rocket-strategy.png'

import Introduction from './components/Introduction';
import WhoWeAre from './components/WhoWeAre';
import OurClients from './components/OurClients';
import OurObjective from './components/OurObjective'; 

// I'm still working on this component

const Main = () => {
  return (
    <main className={styles.main}>
      <Introduction />
      <WhoWeAre />
      <OurClients />
      <ourObjective />
      <Image className={styles.ourRocketStrategyImage} src={ourRocketStrategyImage} alt="Our rocket strategy" />
    </main>
  );
};

export default Main;
