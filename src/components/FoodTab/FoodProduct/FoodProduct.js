import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const FoodProduct = (props) => {

    const {name,  price, img, description} = props.singleFood;


       const [count, setCount] = useState(1)
    const handleUp = () =>setCount(count+ 1);
    const handleDown = () => setCount(count-1); 
    return (
        <div className="fdDetail">
            <Container>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className="foodAbout">
                        
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <h3>$ {price*count} <small>
                            <button onClick={handleDown}>-</button>
                            <input type="submit" value={count} />
                            <button onClick={handleUp}>+</button>
                        </small></h3>
                        <button><i className="fa fa-shopping-cart"></i> Add to Cart</button>

                        <div className="activeImg">
                            <img onClick={document.getElementById('BigImg')}src=""  alt=""/>
                            <img onClick={document.getElementById('BigImg')}src=""  alt=""/>
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

export default FoodProduct;