import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ff6347;
  padding-left: 1rem;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin-left: auto;

  a {
    color: #333;
    text-decoration: none;
    font-size: 1.1rem;
    margin: 0 1rem;

    &:hover {
      color: #ff6347;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    a {
      margin: 0.5rem 0;
      font-size: 1rem;
    }
  }
`;

const HeroContainer = styled.section`
  background-image: url(${process.env.PUBLIC_URL}/header_img.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 60vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem 6vw;
  position: relative;
  color: #fff;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
  z-index: 1;

  @media (max-width: 1200px) {
    min-height: 50vh;
  }

  @media (max-width: 768px) {
    padding: 3rem 3vw;
    min-height: 50vh;
    background-size: cover;
    background-position: top center;
  }

  @media (max-width: 480px) {
    padding: 2rem 2vw;
    min-height: 45vh;
    background-size: cover;
    background-position: top center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 50%;
  padding: 2rem 0;
  font-family: 'Poppins', sans-serif;
  z-index: 2; /* Garante que o conteúdo esteja à frente da imagem */

  h1 {
    font-weight: 600;
    font-size: 3rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 2.2rem; /* Diminui o tamanho do título em telas menores */
    }

    @media (max-width: 480px) {
      font-size: 1.8rem; /* Diminui ainda mais em telas muito pequenas */
    }
  }

  p {
    font-size: 1.2rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Ajusta o conteúdo para ocupar toda a largura da tela */
  }
`;

const HeroButton = styled.button`
  background-color: white;
  color: #747474;
  border: none;
  padding: 0.6vw 1.5vw;
  font-size: max(0.9vw, 12px);
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 200px;
  max-width: 80%;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
    width: 180px;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
    width: 150px;
  }
`;

const DownloadButton = styled(HeroButton)`
  margin-top: 1rem;
`;

const Hero = () => {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar>
        <Logo>GourmetOn</Logo>
        <NavLinks>
          <a href="#menu" onClick={(e) => scrollToSection(e, '#menu')}>Menu</a>
          <a href="#presentation" onClick={(e) => scrollToSection(e, '#presentation')}>Apresentação</a>
          <a href="#vantagens" onClick={(e) => scrollToSection(e, '#vantagens')}>Vantagens</a>
          <a href="#depoimentos" onClick={(e) => scrollToSection(e, '#depoimentos')}>Depoimentos</a>
          <a href="#footer" onClick={(e) => scrollToSection(e, '#footer')}>Contatos</a>
        </NavLinks>
      </Navbar>

      <HeroContainer>
        <HeroContent>
          <h1>Encomende aqui a sua comida preferida</h1> {/* Certifique-se de que este título esteja dentro do conteúdo */}
          <p>Escolha entre um menu diversificado com uma deliciosa variedade de pratos elaborados com os melhores ingredientes e experiência culinária.</p>
          <HeroButton onClick={(e) => scrollToSection(e, '#menu')}>Pratos em Alta</HeroButton>

          <DownloadButton href="/path/to/download" download>
            Baixar o App
          </DownloadButton>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
