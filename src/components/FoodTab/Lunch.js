import React, { useState, useEffect } from 'react';
// import lunchData from '../../FoodData/lunchData';
import FoodList from '../FoodList/FoodList';
import Grid from '@material-ui/core/Grid';


const Lunch = () => {
    // const lunch6 = lunchData.slice(0, 6);
    const [lunch, setLunch] = useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-dawn-75888.herokuapp.com/lunch')
        .then(res => res.json())
        .then(data => {
            setLunch(data);
        })
    },[])
    return (
        <Grid container spacing={3}>
            {
                lunch.map(food =><FoodList foodItem={food}></FoodList>)
            }
        </Grid>
    );
};

export default Lunch;