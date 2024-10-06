import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FoodListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const FoodListTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const FoodGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  
  .food-item {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px;
    width: 300px;
    text-align: center;

    @media (max-width: 768px) {
      width: 250px;
    }

    @media (max-width: 480px) {
      width: 200px;
    }
  }

  img {
    max-width: 100%;
    border-radius: 8px;
  }

  h3 {
    margin: 15px 0;
  }

  p {
    color: #555;
  }
`;

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      const apiKey = '281e10cd8ee449ec8ec31aeda818a3f9'; // Substitua pela sua chave da API
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=6&apiKey=${apiKey}`
      );
      const data = await response.json();
      setFoods(data.recipes); 
    };

    fetchFoodData();
  }, []);

  return (
    <FoodListWrapper id="menu">
      <FoodListTitle>Pratos em Destaque</FoodListTitle> {/* Adicionando o título */}
      <FoodGrid>
        {foods.length > 0 ? (
          foods.map((food) => (
            <div className="food-item" key={food.id}>
              <img src={food.image} alt={food.title} />
              <h3>{food.title}</h3>
              <p>{food.summary.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100)}...</p>
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </FoodGrid>
    </FoodListWrapper>
  );
};

export default FoodList;
