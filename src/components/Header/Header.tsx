import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPageType} from "../../redux/auth-reducer";

const Header = (props: AuthPageType) => {
    return (
        <header className={classes.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt=""/>

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header