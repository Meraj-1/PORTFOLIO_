import React from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Meraj-1" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/meraj-ansari-12bb132a9/" },
  { label: "X", href: "https://x.com/BelalRaza41850" },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container footer-inner">
      <a className="footer-brand" href="#home">MERAJ ANSARI</a>
      <div className="footer-attribution">
        <span className="footer-role">Full-stack developer · Mumbai, India</span>
        <span className="footer-note">
          © {new Date().getFullYear()} · Built with focus & intent
        </span>
      </div>
      <nav className="footer-links" aria-label="Social links">
        {socialLinks.map((link) => (
          <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
