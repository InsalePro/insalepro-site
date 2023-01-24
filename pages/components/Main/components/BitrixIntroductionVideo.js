import styles from '../styles.module.css';

const BitrixIntroductionVideo = () => {
  // still working on it
  // const buttonClass = innerWidth < 600 ? "button " : "big-button ";

  return (
    <div
      id='what-is-bitrix24'
      className={styles.BitrixIntroductionVideoContainer}
    >
      <h2
        className={
          styles.title + ' ' + styles.whiteBackground + ' ' + styles.blueText
        }
      >
        O QUE É O BITRIX24?
      </h2>
      <p
        className={
          styles.BitrixIntroductionVideoParagraph + ' ' + styles.whiteText
        }
      >
        Substitua uma infinidade de serviços e aplicativos por um único
        ecossistema para o seu negócio funcionar. Explore as ferramentas do
        Bitrix24.
      </p>
      <h2 className={styles.title + ' ' + styles.whiteText}>
        O ÚNICO SOFTWARE DE NEGÓCIOS QUE VOCÊ PRECISA
      </h2>
      <div className={styles.videoDemonstrationContainer}>
        <iframe
          className={styles.videoDemonstration}
          src='https://www.youtube.com/embed/q1J-rvY0HtU'
          title='Bitrix24 - espaço de trabalho on-line com mais de 35 ferramentas'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
        <div className={styles.videoDemonstrationButtonsContainer}>
          <button className={'big-button ' + styles.videoDemonstrationButton}>
            SOLICITAR DEMONSTRAÇÃO
          </button>
          <button className={'big-button ' + styles.videoDemonstrationButton}>
            CRIE MINHA CONTA GRATUITA
          </button>
        </div>
      </div>
    </div>
  );
};

export default BitrixIntroductionVideo;
