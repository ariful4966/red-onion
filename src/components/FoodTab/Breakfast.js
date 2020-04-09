import React, { useState } from 'react';
import breakfastData from '../../FoodData/brackfastData';
import Grid from '@material-ui/core/Grid';
import FoodList from '../FoodList/FoodList';

const Breakfast = () => {
    const Breakfast6 = breakfastData.slice(0, 6);
    const [breakfast, setBreakfast] = useState(Breakfast6);
    return (
        <div>
            <Grid container spacing={3}>
                {
                    breakfast.map(food =><FoodList foodItem={food}></FoodList>)
                }
            </Grid>
        </div>
    );
};

export default Breakfast;