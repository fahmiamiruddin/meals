import React, { useEffect, useState } from 'react'

const UseEffectComp = () => {

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
    <div>
      <h3>UseEffect Component</h3>
      <button onClick={() => handleSelect('Beef')}>Beef</button>
      <button onClick={() => handleSelect('Seafood')}>Seafood</button>
      {
        meals && meals.length > 0 ? (
          <div style={{display:'flex', flexWrap:'wrap'}}>
            {
              meals.map(meal => (
                <div style={{margin:'16px'}} key={meal.idMeal} >
                  <p>{meal.strMeal}</p>
                  <img style={{width:'100px', height:'100px'}} src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
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

export default UseEffectComp