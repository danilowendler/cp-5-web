import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;

  .social-links {
    margin: 20px 0;

    a {
      color: #fff;
      margin: 0 10px;
      font-size: 1.5rem;
      transition: color 0.3s;

      &:hover {
        color: #ff7f50;
      }
    }
  }

  .footer-info {
    font-size: 0.9rem;
    margin-top: 10px;

    p {
      margin: 5px 0;
    }
  }

  .legal-links {
    margin-top: 20px;

    a {
      color: #fff;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: #ff7f50;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper id = "footer">
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
      <div className="footer-info">
        <p>Contato: suporte@gourmeton.com</p>
        <p>Telefone: +55 (11) 1234-5678</p>
      </div>
      <div className="legal-links">
        <a href="#terms">Termos de Uso</a> | <a href="#privacy">Política de Privacidade</a>
      </div>
      <p>&copy; 2024 GourmetOn. Todos os direitos reservados.</p>
    </FooterWrapper>
  );
};

export default Footer;
