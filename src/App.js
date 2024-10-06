import React, { useEffect, useState } from 'react';
import HeroSection from './components/Hero';
import Apresentacao from './components/Presentation';
import Funcionalidades from './components/Features';
import Depoimentos from './components/Testimonials';
import FormularioContato from './components/ContactForm';
import FoodList from './components/FoodList';
import Footer from './components/Footer';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Remove qualquer overflow horizontal */
    font-family: 'Arial', sans-serif; /* Se quiser definir uma fonte global também */
  }

  * {
    box-sizing: border-box; /* Boa prática para garantir consistência de espaçamento */
  }
`;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/food/menuItems/search?query=pizza&number=10&apiKey=281e10cd8ee449ec8ec31aeda818a3f9`
        );
        setData(response.data.menuItems);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <FoodList />
      <Apresentacao />
      <Funcionalidades data={data} loading={loading} />
      <Depoimentos />
      <FormularioContato />
      <Footer />
    </>
  );
}

export default App;
