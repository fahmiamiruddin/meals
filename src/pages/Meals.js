import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Meals = () => {
  const [meals, setMeals] = useState(null);
  const [selectedCat, setSelectedCat] = useState('Seafood');

  // console.log('meals', meals);

  const fetchMeals = async (category) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const result = await data.json();
    // console.log('data', data);
    // console.log('result', result);
    setMeals(result.meals);
  }

  const handleSelect = (category) => {
    setSelectedCat(category);
    // console.log('cat', category);
  }

  useEffect(() => {
    fetchMeals(selectedCat);
  }, [selectedCat])

  return (
    <div className='bodyku'>
      <h3>Dafatar Makanan, kategori {selectedCat}</h3>
      <hr/>
      <button onClick={() => handleSelect('Chicken')}>Ayam &#128020;</button>
      <button onClick={() => handleSelect('Dessert')}>Dessert &#127846;</button>
      <button onClick={() => handleSelect('Seafood')}>Lautan &#127754;</button>
      <button onClick={() => handleSelect('Beef')}>Sapi &#128046;</button>
      {
        meals && meals.length > 0 ? (
          <div style={{
            marginTop:'10px',
            display:'grid',
            gap:'20px',
            gridTemplateColumns:'repeat(4, 1fr)'
          }}>
            {
              meals.map(meal => (
                <Link to={`/meal/${meal.idMeal}`}  key={meal.idMeal} style={{
                  border: '1px solid blue',
                  textDecoration: 'none',
                  padding:'5px',
                  color: 'black' 
                }}>
                    <img style={{width:'100px', height:'100px', border:'1px solid grey'}} src={meal.strMealThumb} alt={meal.strMeal} />
                    <p style={{borderTop:'1px solid black', padding:'3px'}}>&#127858; {meal.strMeal}</p>
                </Link>
              ))
            }
          </div>
        ) : (
          <p>Loading . . .</p>
        )
      }
    </div>
  )
}

export default Meals