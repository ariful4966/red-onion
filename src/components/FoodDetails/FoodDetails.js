import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

import './FoodDetails.css';
import FoodProduct from '../FoodTab/FoodProduct/FoodProduct';
import foodData from '../../FoodData/index'

const FoodDetails = () => {

    const {foodKey} = useParams();
    // const [foodDet, setFoodDet] = useState();
    const foodDet = foodData.find(pd => pd.key === foodKey);
    
   
    // useEffect(()=>{
    //     fetch('http://localhost:4200/lunch'+foodKey)
    //     .then(res =>res.json())
    //     .then(data =>{
    //         setFoodDet(data);
    //     })
    // },[foodKey]);




 

    return (
        <div>
       
        
             {
                foodDet &&  <FoodProduct singleFood={foodDet}></FoodProduct>
              }
              
              
        
        </div>
    );
};

export default FoodDetails;