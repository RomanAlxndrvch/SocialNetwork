import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/149071.png";
import {UserType} from "../redux/user-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil((props.totalUsersCount > 54 ? 54 : props.totalUsersCount) / props.pageSize)

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }

    return (
        <div>
            <div>
                {pages.map(el => {
                    return <span key={el} onClick={() => {
                        props.onPageChanged(el)
                    }} className={props.currentPage === el ? classes.selectedPage : ''}>{el} </span>
                })}
            </div>
            {
                props.users.map(el =>
                    <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                               <img className={classes.photo}
                                    src={el.photos.small !== null ? el.photos.small : userPhoto}
                                    alt={'photo'}/>
                                </NavLink>
                        </div>
                        <div>
                            {
                                el.followed ?
                                    <button onClick={() => {
                                        props.unfollow(el.id)
                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() => {
                                        props.follow(el.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{"el.location.country"}</div>
                            <div>{"el.location.city"}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}