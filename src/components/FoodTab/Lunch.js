import React, { useState } from 'react';
import lunchData from '../../FoodData/lunchData';
import FoodList from '../FoodList/FoodList';
import Grid from '@material-ui/core/Grid';


const Lunch = () => {
    const lunch6 = lunchData.slice(0, 6);
    const [lunch, setLunch] = useState(lunch6);
    return (
        <Grid container spacing={3}>
            {
                lunch.map(food =><FoodList foodItem={food}></FoodList>)
            }
        </Grid>
    );
};

export default Lunch;