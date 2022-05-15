import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props: any) => {
    return (
        <nav className={classes.nav}>

            <div><NavLink to={'/profile'} activeClassName={classes.active} className={classes.item}>Profile</NavLink>
            </div>

            <div><NavLink to={'/dialogs'} activeClassName={classes.active} className={classes.item}>Messages</NavLink>
            </div>

            <div><NavLink to={'/News'} activeClassName={classes.active} className={classes.item}>News</NavLink></div>

            <div><NavLink to={'/Music'} activeClassName={classes.active} className={classes.item}>Music</NavLink></div>

            <div><NavLink to={'/Settings'} activeClassName={classes.active} className={classes.item}>Settings</NavLink>
            </div>

            <Friends state={props.state.friends}/>

        </nav>
    )
}

export default Navbar

