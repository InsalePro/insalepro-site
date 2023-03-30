import Image from 'next/image';

import styles from './styles.module.css';

import ourRocketStrategyImage from '../../../public/images/rocket-strategy.png';
import SellingMachineImage from '../../../public/images/selling-machine.png';

import Introduction from './components/Introduction';
import WhoWeAre from './components/WhoWeAre';
import OurClients from './components/OurClients';
import OurObjective from './components/OurObjective';
import OurSpeciality from './components/OurSpeciality';
import BitrixIntroductionVideo from './components/BitrixIntroductionVideo';
import ApplyNow from './components/ApplyNow';
import OurPlans from './components/OurPlans';
import JoinUs from './components/JoinUs';
import ContactForm from './components/ContactForm';

const Main = () => {
  return (
    <main className={styles.main}>
      <Introduction />
      <WhoWeAre />
      <OurClients />
      <OurObjective />
      <Image
        className={styles.ourRocketStrategyImage}
        src={ourRocketStrategyImage}
        alt='Our rocket strategy'
      />
      <Image
        className={styles.SellingMachineImage}
        src={SellingMachineImage}
        alt='People working together'
      />
      <OurSpeciality />
      <BitrixIntroductionVideo />
      <ApplyNow />
      <OurPlans />
      <JoinUs />
      <ContactForm />
    </main>
  );
};

export default Main;
