import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailMeal = () => {
  const {idMeal} = useParams();
  const [meal, setMeal] = useState(null);
  const [mealTags, setMealTags] = useState(null);

  const fetchMeal = async (idMeal) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const result = await data.json();
    const tags = result.meals[0].strTags;
    // console.log('data', data);
    // console.log('result', result);
    setMeal(result.meals[0]);
    setMealTags(tags.split(','));
  }

  // console.log('meal', meal);
  // console.log('meal', mealTags);

  useEffect(() => {
    fetchMeal(idMeal);
  }, [])

  return (
    <div className='bodyku'>
      <h3>Detail Makanan</h3>
      <hr/>
      {
        meal ? (
          <div style={{marginTop:'10px', padding:'10px'}}>
            <img style={{border:'4px solid grey'}} src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>&#127858; Nama Makanan : {meal.strMeal}</h3>
            <hr/>
            <p>&#127988; asal makanan: {meal.strArea}</p>
            <p>&#127860; kategori makanan: {meal.strCategory}</p>
            &#128278; tags makanan:
            <ul>
              {
                mealTags.map(tag => (<li key={tag}>{tag}</li>))
              }
            </ul>
            <p>&#128250; turorial masak: <a target="_blank" href={meal.strYoutube} className='none'>yutub</a></p>
            <p>&#128279;	sumber: <a target="_blank" href={meal.strSource} className='none'>website</a></p>
          </div>
        ) : (
          <p>Loading . . .</p>
        )
      }
    </div>
  )
}

export default DetailMeal