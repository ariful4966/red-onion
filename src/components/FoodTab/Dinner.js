import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
// import dinnerData from '../../FoodData/dinnerData';
import FoodList from '../FoodList/FoodList';


const Dinner = () => {
    // const dinner6 = dinnerData.slice(0, 6);
    const [dinner, setDinner] = useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-dawn-75888.herokuapp.com/dinner')
        .then(res => res.json())
        .then(data =>{
            setDinner(data)
        })
    },[])
    return (
        <div>
            <Grid container spacing={3}>
                {
                    dinner.map(food => <FoodList foodItem={food}></FoodList>)
                }
            </Grid>
        </div>
    );
};

export default Dinner;