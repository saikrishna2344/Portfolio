import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

// ✅ Direct image imports
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("About");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Sai</h1>

      <div className={styles.menu}>
        {/* ✅ Mobile layout: Menu Icon and Theme Toggle Side-by-Side */}
        <div className={styles.mobileIcons}>
        <img
  className={styles.menuBtn}
  src={menuOpen ? closeIcon : menuIcon}
  alt="menu-button"
  style={{ width: "30px", height: "30px" }} // TEMP debug
  onClick={() => setMenuOpen(!menuOpen)}
/>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={styles.themeToggleMobile}
            title="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          {["About", "Internships", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setActiveItem(item)}
                className={`${activeItem === item ? styles.active : ""} relative group px-2 py-1`}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                    activeItem === item ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}

          {/* ✅ Desktop theme toggle */}
          <li className={styles.themeToggleDesktop}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDarkMode(!darkMode);
              }}
              className={styles.themeToggle}
              title="Toggle Theme"
            >
              {darkMode ? "☀" : "☾"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
