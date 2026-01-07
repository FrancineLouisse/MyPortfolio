import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__owner">
          © 2025 <span>Francine Louisse Miranda</span> | Web &amp; Mobile Developer
        </p>

        <p className="footer__tagline">Built with passion and continuous learning.</p>

        <nav className="footer__social" aria-label="Social links">
          <a href="https://www.facebook.com/francine.miranda2" target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="social__link">
            {/* Facebook */}
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="currentColor" d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H8.1v-2.9h2.34V9.84c0-2.3 1.37-3.58 3.47-3.58.99 0 2.03.18 2.03.18v2.24h-1.14c-1.13 0-1.48.7-1.48 1.42v1.71h2.52l-.4 2.9h-2.12V22c4.78-.75 8.44-4.92 8.44-9.94Z"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/francine.louisse/?igsh=aDR0anNoN2xoMGhr#" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="social__link">
            {/* Instagram */}
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM17.75 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6Z"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/francine-louisse-miranda-010604377/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="social__link">
            {/* LinkedIn */}
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.01h4V23h-4V8.01Zm7.5 0h3.84v2.05h.05c.53-1.01 1.84-2.08 3.8-2.08 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.64c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.73-2.55 3.51V23h-4V8.01Z"/>
            </svg>
          </a>

          <a href="https://github.com/FrancineLou" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="social__link">
            {/* GitHub */}
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.8-.25.8-.56v-2c-3.26.71-3.95-1.4-3.95-1.4A3.11 3.11 0 0 0 3.5 16.9c-1.06-.73.08-.72.08-.72a2.47 2.47 0 0 1 1.8 1.21 2.5 2.5 0 0 0 3.42 1 2.49 2.49 0 0 1 .75-1.56c-2.6-.3-5.33-1.3-5.33-5.79a4.53 4.53 0 0 1 1.21-3.15 4.21 4.21 0 0 1 .12-3.11s.98-.31 3.2 1.2a10.98 10.98 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.44 1.1.36 2.36.12 3.11A4.53 4.53 0 0 1 20 10.24c0 4.51-2.74 5.49-5.35 5.78a2.77 2.77 0 0 1 .8 2.14v3.17c0 .31.22.68.81.56A11.5 11.5 0 0 0 12 .5Z"/>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
