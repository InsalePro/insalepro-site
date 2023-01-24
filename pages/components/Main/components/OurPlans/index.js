import styles from './styles.module.scss';

function OurPlans() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>NOSSOS PLANOS</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.plan}>
          <div
            className={styles.planTitle}
            style={{ backgroundColor: '#1fff57' }}
          >
            <h2>FREE</h2>
          </div>

          <div className={styles.planText}>
            <h3>Usuários ilimitados</h3>
            <h4>100% grátis 5 GB</h4>
            <p>
              Colaboração <br />
              Bate-papo <br />
              Videochamadas em HD <br />
              Calendário <br />
              Espaço de trabalho da empresa <br />
              Feed Base de conhecimento <br />
              Tarefas e Projetos <br />
              CRM <br />
              Drive <br />
              Contact Center <br />
              Criador de sites <br />
            </p>
          </div>
          <button>COMPRAR</button>
        </div>

        <div className={styles.plan}>
          <div
            className={styles.planTitle}
            style={{ backgroundColor: '#192CFF' }}
          >
            <h2>BASIC</h2>
          </div>

          <div className={styles.planText}>
            <h3>5 Usuários</h3>
            <h4>R$ 218/mês 24 GB</h4>
            <p>
              Colaboração <br />
              Bate-papo <br />
              Videochamadas em HD <br />
              Calendário <br />
              Espaço de trabalho da empresa <br />
              Feed Base de conhecimento <br />
              Tarefas e Projetos <br />
              CRM <br />
              Drive <br />
              Contact Center <br />
              Criador de sites <br />
              Loja on-line <br />
              Suporte ao cliente
            </p>
          </div>
          <button>COMPRAR</button>
        </div>

        <div className={styles.plan}>
          <div
            className={styles.planTitle}
            style={{ backgroundColor: '#192CFF' }}
          >
            <h2>STANDARD</h2>
          </div>

          <div className={styles.planText}>
            <h3>50 Usuários</h3>
            <h4>R$ 437/mês 100 GB</h4>
            <p>
              Colaboração <br />
              Bate-papo <br />
              Videochamadas em HD <br />
              Calendário <br />
              Espaço de trabalho da empresa <br />
              Feed Base de conhecimento <br />
              Tarefas e Projetos <br />
              CRM <br />
              Drive <br />
              Contact Center <br />
              Criador de sites <br />
              Loja on-line <br />
              Marketing <br />
              Documentos on-line <br />
              Suporte ao cliente <br />
              Administração
            </p>
          </div>
          <button>COMPRAR</button>
        </div>

        <div className={styles.plan}>
          <div
            className={styles.planTitle}
            style={{ backgroundColor: '#192CFF' }}
          >
            <h2>PROFESSIONAL</h2>
          </div>

          <div className={styles.planText}>
            <h3>100 Usuários</h3>
            <h4>R$ 875/mês 1024 GB</h4>
            <p>
              Colaboração <br />
              Bate-papo <br />
              Videochamadas em HD <br />
              Calendário <br />
              Espaço de trabalho da empresa <br />
              Feed Base de conhecimento <br />
              Tarefas e Projetos <br />
              CRM <br />
              Drive <br />
              Contact Center <br />
              Criador de sites <br />
              Loja on-line <br />
              Marketing <br />
              Documentos on-line <br />
              Sales Intelligence <br />
              Automação <br />
              RH <br />
              Suporte ao cliente <br />
              Administração
            </p>
          </div>
          <button>COMPRAR</button>
        </div>

        <div className={styles.plan}>
          <div
            className={styles.planTitle}
            style={{ backgroundColor: '#091059' }}
          >
            <h2>ENTERPRISE</h2>
          </div>

          <div className={styles.planText}>
            <h3>250+ Usuários</h3>
            <h4>R$ 1750/mês 3 TB</h4>
            <p>
              Colaboração <br />
              Bate-papo <br />
              Videochamadas em HD <br />
              Calendário <br />
              Espaço de trabalho da empresa <br />
              Feed Base de conhecimento <br />
              Tarefas e Projetos <br />
              CRM <br />
              Drive <br />
              Contact Center <br />
              Criador de sites <br />
              Loja on-line <br />
              Marketing <br />
              Documentos on-line <br />
              Sales Intelligence <br />
              Automação <br />
              RH <br />
              Suporte ao cliente <br />
              Administração
            </p>
          </div>
          <button>COMPRAR</button>
        </div>
      </div>
    </div>
  );
}

export default OurPlans;
