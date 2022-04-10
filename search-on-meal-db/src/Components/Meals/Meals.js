import React from 'react';
import { useEffect, useState } from 'react';
import SearchMeal from '../Search/SearchMeal';


const Meals = () => {
    const [searchItem, setSearchItem] = useState('');
    const [meals, setMeals] = useState([]);
    // console.log(meals.length);
    useEffect(function () {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchItem]);

    // ******************************************
    const searchEvent = event => {
        setSearchItem(event.target.value);
    };
    // ******************************************

    return (
        <div>
            <h1>search the meal</h1>
            <input onChange={searchEvent} type="text" name="" id="" />

            <div className='mealsContainer'>
                {meals?.map(meal => <SearchMeal key={meal?.idMeal} meal={meal}></SearchMeal>)}
            </div>
        </div>
    );
};

export default Meals;