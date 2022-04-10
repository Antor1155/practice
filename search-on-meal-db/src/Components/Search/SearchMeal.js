import React from 'react';
import { Link } from 'react-router-dom';
import './SearchMeal.css'

const SearchMeal = ({meal}) => {
    return (
        <div className='mealCon'>
            <img className='mealImg' src={meal.strMealThumb} alt="" />
            <p>{meal.idMeal}</p>
            <h2>{meal.strMeal}</h2>
            <Link to={'/meals/'+ meal.idMeal}> click to see more</Link>
        </div>
    );
};

export default SearchMeal;