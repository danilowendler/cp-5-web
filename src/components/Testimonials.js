import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Efeito hover para dar destaque */
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    font-weight: bold;
    color: #ff6347;
  }
`;

const Testimonials = () => (
  <TestimonialsSection id="depoimentos">
    <TestimonialsTitle>O que nossos clientes dizem</TestimonialsTitle>
    
    <TestimonialsWrapper>
      <TestimonialCard>
        <p>"A melhor experiência de delivery que já tive!"</p>
        <span>João</span>
      </TestimonialCard>

      <TestimonialCard>
        <p>"Comida deliciosa e entrega super rápida. Recomendo a todos!"</p>
        <span>Maria</span>
      </TestimonialCard>

      <TestimonialCard>
        <p>"Facilidade no pagamento e pratos incríveis. Voltarei a usar com certeza."</p>
        <span>Carlos</span>
      </TestimonialCard>
    </TestimonialsWrapper>
  </TestimonialsSection>
);

export default Testimonials;
