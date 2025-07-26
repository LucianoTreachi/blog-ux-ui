import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import ThemeButton from "../../components/themeButton/ThemeButton";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.logo} to="/">
            Blog.
          </Link>

          <div className={`${styles.menu} ${isOpen && styles.open}`}>
            <button
              className={styles.closeMenuButton}
              onClick={toggleMenu}
              aria-label="Cerrar Menú"
            >
              <AiOutlineClose />
            </button>

            <Link
              className={styles.menuLink}
              to="/sobre-este-blog"
              onClick={toggleMenu}
            >
              Sobre este blog
            </Link>
          </div>

          <ThemeButton />

          <button
            className={styles.openMenuButton}
            onClick={toggleMenu}
            aria-label="Abrir Menú"
          >
            <AiOutlineMenu />
          </button>
        </nav>

        <div
          className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        ></div>
      </header>
    </>
  );
}
