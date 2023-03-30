import styles from './styles.module.scss';

function Plan({ title, buttonTitle, titleColor, users, price, url, children }) {
  return (
    <div className={styles.plan} style={{ borderColor: titleColor }}>
      <div
        className={styles.planTitle}
        style={{ borderBottomColor: titleColor }}
      >
        <h2>{title}</h2>
      </div>

      <h3>{users}</h3>
      <h4 style={{ color: titleColor }}>{price}</h4>

      <div className={styles.planText}>
        <p>{children}</p>
      </div>
      <button style={{ border: `2px solid ${titleColor}` }}>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {buttonTitle || 'ADQUIRA JÁ'}
        </a>
      </button>
    </div>
  );
}

export default Plan;
