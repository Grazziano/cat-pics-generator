import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Cat Pics Generator. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
