import React from 'react';
import Container from '@material-ui/core/Container';
import logo from '../../images/logo2.png';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {


    return (
        <div className="headerArea">
            <Container>
                <div className="head">
                    <div className="logoArea">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="signInArea">
                        <button><a href="/login">Login</a></button>
                        <button>Sign In</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;