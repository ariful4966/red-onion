import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const FoodList = (props) => {
    const { img, about, price, name, key } = props.foodItem;
    return (
        <Grid item xs={4}>
            <div className="foodPic">
                <img src={img} alt="" />
            </div>
            <div className="foodDetail">
                <Link to={"/food/"+key}><h3>{name}</h3></Link>
                <p>{about}</p>
                <h2>$ {price}</h2>
            </div>
        </Grid>
    );
};

export default FoodList;