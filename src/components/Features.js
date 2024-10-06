import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaFilter, FaMoneyCheckAlt } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background-color: #fff;
  display: flex;
  flex-direction: column; /* Flex-direction ajustado para alinhar o título e a frase */
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const FeaturesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #777;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 3rem; /* Adicionando gap entre os itens */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem; /* Gap ajustado para telas menores */
  }
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: 2.5rem; /* Aumentando o padding */
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 2.5rem; /* Mantendo o padding maior em dispositivos móveis */
  }

  svg {
    color: #ff6347;
    margin-bottom: 1.5rem; /* Aumentando o espaçamento abaixo do ícone */
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1.5rem; /* Aumentando o espaçamento abaixo do título */
  }

  p {
    color: #777;
    font-size: 1.1rem;
  }
`;

const Features = () => (
  <FeaturesSection id="vantagens">
    {/* Título e frase introdutória */}
    <FeaturesHeader>
      <h2>Vantagens que facilitam sua vida</h2>
      <p>
        No GourmetOn, oferecemos recursos inovadores que tornam seu pedido mais rápido, 
        eficiente e sem complicações. Descubra como nossas funcionalidades facilitam sua experiência.
      </p>
    </FeaturesHeader>

    {/* Itens de Features */}
    <FeaturesGrid>
      <FeatureItem>
        <FaSearch size={60} />
        <h3>Busca Rápida</h3>
        <p>Encontre seus pratos favoritos de forma ágil e eficiente, com um sistema de busca aprimorado.</p>
      </FeatureItem>
      <FeatureItem>
        <FaFilter size={60} />
        <h3>Filtros Eficientes</h3>
        <p>Refine sua busca por tipo de comida, faixa de preço e muito mais, para achar o prato ideal.</p>
      </FeatureItem>
      <FeatureItem>
        <FaMoneyCheckAlt size={60} />
        <h3>Pagamentos Fáceis</h3>
        <p>Faça pagamentos rápidos, seguros e descomplicados, para que a sua experiência seja perfeita.</p>
      </FeatureItem>
    </FeaturesGrid>
  </FeaturesSection>
);

export default Features;
