import React, { useState, useEffect } from 'react';
// import breakfastData from '../../FoodData/brackfastData';
import Grid from '@material-ui/core/Grid';
import FoodList from '../FoodList/FoodList';

const Breakfast = () => {
    // const Breakfast6 = breakfastData.slice(0, 6);
    const [breakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-dawn-75888.herokuapp.com/breakfast')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBreakfast(data);
            })
    }, [])
    return (
        <div>
            <Grid container spacing={3}>
                {
                    breakfast.map(food => <FoodList foodItem={food}></FoodList>)
                }
            </Grid>
        </div>
    );
};

export default Breakfast;