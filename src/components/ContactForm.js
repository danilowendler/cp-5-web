import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 0;
  background-color: #fff;
  text-align: center;

  form {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      padding: 0.8rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 1rem;
      width: 300px;

      @media (max-width: 768px) {
        width: 250px;
      }

      @media (max-width: 480px) {
        width: 200px;
      }
    }

    button {
      padding: 0.8rem 1.2rem;
      background-color: #ff6347;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #ff4500;
      }

      @media (max-width: 480px) {
        padding: 0.6rem 1rem;
      }
    }
  }
`;

const ContactForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`E-mail cadastrado: ${email}`);
  };

  return (
    <ContactSection>
      <h2>Fique por dentro das novidades</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </ContactSection>
  );
};

export default ContactForm;
