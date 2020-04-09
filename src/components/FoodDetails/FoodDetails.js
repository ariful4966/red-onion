import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FoodData from '../../FoodData/index';
import { Container } from '@material-ui/core';
import './FoodDetails.css';

const FoodDetails = () => {
    const { foodKey } = useParams();
    const [foodDet, setFoodDet] = useState();
    const food = FoodData.find(fd => fd.key === foodKey);
    const { name, price, img, description } = food;

    return (
        <div className="fdDetail">
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className="foodAbout">
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <h3>$ {price} <small>
                            <button>-</button>
                            <input type="submit" value="1" />
                            <button>+</button>
                        </small></h3>
                        <button>Add to Cart</button>

                        <div>
                            <img onClick={document.getElementById('BigImg')}src={img}  alt=""/>
                            <img onClick={document.getElementById('BigImg')}src={img}  alt=""/>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="foodImage">
                        <img src={img} alt="" id="BigImg"/>
                    </div>
                </Grid>
            </Grid>
            <button ><Link to ="/">Home</Link></button>
        </Container>
        </div>
    );
};

export default FoodDetails;