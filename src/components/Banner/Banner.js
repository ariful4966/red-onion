import React from 'react';
import './Banner.css';
import { Container } from '@material-ui/core';

const Banner = () => {
    return (
        <div className="bannerArea">
            <Container>
                <form action="">
                    <div className="formCenter">
                        <label>
                            <input type="text" placeholder="Type your text" />
                            <input type="submit" value="Search" />
                        </label>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Banner;