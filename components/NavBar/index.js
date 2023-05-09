import Link from 'next/link';
import styles from './navbar.module.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setNavbarVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [prevScrollPos, navbarVisible]);

  return (
    <nav className={`${styles.navbar} ${navbarVisible ? styles.visible : styles.hidden}`}>
      <ul>
        {/* <li className={styles.logo}>LOGO</li> */}

        <li>
          <Link href="#home" scroll={false}>Inicio</Link >
        </li>

        <li>
          <Link href="#about" scroll={false}>Sobre mi</Link >
        </li>

        <li>
          <Link href="#contact" scroll={false}>Contacto</Link >
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
