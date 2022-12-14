import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPageType} from "../../redux/auth-reducer";

type HeaderPropsType = AuthPageType & {
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt=""/>

            <div className={classes.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={() => props.logout()}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header