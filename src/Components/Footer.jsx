import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Realtors } from '../Assets/house.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Realtors />
      <p>Realtors. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
