import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import dinnerData from '../../FoodData/dinnerData';
import FoodList from '../FoodList/FoodList';


const Dinner = () => {
    const dinner6 = dinnerData.slice(0, 6);
    const [dinner, setDinner] = useState(dinner6);
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