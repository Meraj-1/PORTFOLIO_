import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Icon } from "../assests/assets";
import { getProjectSlugFromPath } from "../utils/routes";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Selected work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuToggleRef = useRef(null);
  const projectSlug = getProjectSlugFromPath(window.location.pathname);
  const homeHref = (href) => (projectSlug ? `/${href}` : href);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const sectionIds = navigation.map(({ href }) => href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length) {
          setActiveSection(
            visibleSections.sort(
              (first, second) =>
                second.intersectionRatio - first.intersectionRatio,
            )[0].target.id,
          );
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <nav className="site-container site-nav" aria-label="Main navigation">
        <a
          className="brand"
          href={projectSlug ? "/" : "#home"}
          onClick={closeMenu}
          aria-label="Meraj home"
        >
          <img src={Icon.logo} alt="" />
          <span>MERAJ ANSARI</span>
        </a>

        <ul
          className={`nav-links${isMenuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={homeHref(item.href)}
                onClick={closeMenu}
                aria-current={
                  !projectSlug && activeSection === item.href.slice(1)
                    ? "location"
                    : undefined
                }
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-resume-link">
            <a href="/meraj_ansari.pdf" download onClick={closeMenu}>
              Download résumé
            </a>
          </li>
        </ul>

        <a className="nav-contact" href="/meraj_ansari.pdf" download>
          Résumé <span aria-hidden="true">↗</span>
        </a>

        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
