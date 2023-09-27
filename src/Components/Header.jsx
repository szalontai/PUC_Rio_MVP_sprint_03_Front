import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Realtors } from '../Assets/house.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Realtors - Home">
          <Realtors />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.user_login}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
