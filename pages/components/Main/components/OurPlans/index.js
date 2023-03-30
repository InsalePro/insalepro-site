import styles from './styles.module.scss';
import Plan from './Plan';

const plans = [
  {
    title: 'FREE',
    titleColor: '#1fff57',
    users: 'Usuários ilimitados',
    price: '100% grátis 5 GB',
    text: `Colaboração
    Bate-papo
    Videochamadas em HD
    Calendário
    Espaço de trabalho da empresa
    Feed Base de conhecimento
    Tarefas e Projetos
    CRM
    Drive
    Contact Center
    Criador de sites`,
  },
  {
    title: 'BASIC',
    titleColor: '#192CFF',
    users: 'Usuários ilimitados',
    price: '100% grátis 5 GB',
    text: `Colaboração
    Bate-papo
    Videochamadas em HD
    Calendário
    Espaço de trabalho da empresa
    Feed Base de conhecimento
    Tarefas e Projetos
    CRM
    Drive
    Contact Center
    Criador de sites`,
  },
  {
    title: 'STANDARD',
    titleColor: '#192CFF',
    users: 'Usuários ilimitados',
    price: '100% grátis 5 GB',
    text: `Colaboração
    Bate-papo
    Videochamadas em HD
    Calendário
    Espaço de trabalho da empresa
    Feed Base de conhecimento
    Tarefas e Projetos
    CRM
    Drive
    Contact Center
    Criador de sites`,
  },
  {
    title: 'PROFESSIONAL',
    titleColor: '#192CFF',
    users: 'Usuários ilimitados',
    price: '100% grátis 5 GB',
    text: `Colaboração
    Bate-papo
    Videochamadas em HD
    Calendário
    Espaço de trabalho da empresa
    Feed Base de conhecimento
    Tarefas e Projetos
    CRM
    Drive
    Contact Center
    Criador de sites`,
  },
  {
    title: 'ENTERPRISE',
    titleColor: '#192CFF',
    users: 'Usuários ilimitados',
    price: '100% grátis 5 GB',
    text: `Colaboração
    Bate-papo
    Videochamadas em HD
    Calendário
    Espaço de trabalho da empresa
    Feed Base de conhecimento
    Tarefas e Projetos
    CRM
    Drive
    Contact Center
    Criador de sites`,
  },
];

function OurPlans() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>NOSSOS PLANOS</h1>
      </div>

      <div className={styles.content}>
        <Plan
          title='FREE'
          titleColor='#1fff57'
          users='Usuários ilimitados'
          price='100% grátis - 5 GB'
        >
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
        </Plan>

        <Plan
          title='BASIC'
          titleColor='#192CFF'
          users='5 Usuários'
          price='R$ 218/mês - 24 GB'
          url='https://pag.getnet.com.br/ayj-wkEL-'
        >
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
        </Plan>

        <Plan
          title='STANDARD'
          titleColor='#192CFF'
          users='50 Usuários'
          price='R$ 437/mês - 100 GB'
          url='https://pag.getnet.com.br/ThDs7Ky_Y'
        >
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
        </Plan>

        <Plan
          title='PROFESSIONAL'
          titleColor='#192CFF'
          users='100 Usuários'
          price='R$ 875/mês - 1024 GB'
          url='https://pag.getnet.com.br/oq5ToJC09'
        >
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
        </Plan>

        <Plan
          title='ENTERPRISE'
          titleColor='#091059'
          users='250+ Usuários'
          price='R$ 1750/mês - 3 TB'
          url='https://pag.getnet.com.br/bQs4pnnwh'
        >
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
          Múltiplas filiais <br />
          Escalabilidade <br />
          Pacote Enterprise <br />
          Suporte ao cliente <br />
          Administração
        </Plan>
      </div>
    </div>
  );
}

export default OurPlans;
