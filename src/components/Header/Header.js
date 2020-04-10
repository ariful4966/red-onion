import React from 'react';
import Container from '@material-ui/core/Container';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';
import useAuth from '../Login/useAuth';
import './Header.css'

const Header = () => {
    const auth = useAuth();
    console.log(auth.user);

    return (
        <div className="headerArea">
            <Container>
                <div className="head">
                    <div className="logoArea">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="signInArea">
                        <span><i className="fa fa-shopping-cart"></i><input type="submit" value="0"/></span>
                        <button><a href="/login">Login</a></button>
                        {auth.user ?
                            <span>Welcome style={{}}{auth.user.name}</span> :
                            <button><Link to="/signIn" className="btnOnion">Sing In</Link></button>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;