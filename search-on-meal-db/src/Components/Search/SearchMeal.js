import React from 'react';
import './SearchMeal.css'

const SearchMeal = ({meal}) => {
    return (
        <div>
            <img className='mealImg' src={meal.strMealThumb} alt="" />
            <h2>{meal.strMeal}</h2>
        </div>
    );
};

export default SearchMeal;