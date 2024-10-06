import React from 'react';
import styled from 'styled-components';
import { FaTruck, FaUtensils, FaClock } from 'react-icons/fa'; // Ícones de exemplo

const PresentationSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  background-color: #f4f4f4;
  color: #333;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const PresentationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BenefitCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  width: 30%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px); /* Animação suave ao passar o mouse */
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 2rem;
  }

  svg {
    font-size: 3rem;
    color: #ff6347;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #ff6347;
  }

  p {
    color: #555;
  }
`;

const Presentation = () => (
  <PresentationSection id="presentation">
    <h2>Por que escolher o GourmetOn?</h2>
    <p>Desfrute de uma experiência única ao pedir sua refeição online</p>

    {/* Container com os benefícios */}
    <PresentationContainer>
      {/* Cartão 1 - Entrega rápida */}
      <BenefitCard>
        <FaTruck />
        <h3>Entrega Rápida</h3>
        <p>Receba seus pedidos em tempo recorde com nossos serviços de entrega ágeis e eficientes.</p>
      </BenefitCard>

      {/* Cartão 2 - Variedade de restaurantes */}
      <BenefitCard>
        <FaUtensils />
        <h3>Variedade de Restaurantes</h3>
        <p>Escolha entre uma ampla seleção de restaurantes e pratos exclusivos disponíveis na sua região.</p>
      </BenefitCard>

      {/* Cartão 3 - 24/7 */}
      <BenefitCard>
        <FaClock />
        <h3>Disponível 24/7</h3>
        <p>Faça seu pedido a qualquer hora do dia ou da noite com nosso serviço 24 horas.</p>
      </BenefitCard>
    </PresentationContainer>
  </PresentationSection>
);

export default Presentation;
