import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./SingleMeal.css"

const SingleMeal = () => {
    const {id} = useParams();

    const [mymeal, setMyMeal] = useState({});

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>res.json())
        .then(data => setMyMeal(data.meals[0]))
        },[]);
    return (
        <div>
            <h2>{mymeal.strMeal}</h2>
            <h3>from: {mymeal.strArea}</h3>
            <img className='selected' src={mymeal.strMealThumb} alt="" />
            <h3>how to make:</h3>
            <p>{mymeal.strInstructions}</p>
            <p> this is single meal of {id}</p>
        </div>
    );
};

export default SingleMeal;