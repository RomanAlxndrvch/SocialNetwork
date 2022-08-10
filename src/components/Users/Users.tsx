import React, {MouseEventHandler} from "react";
import {UserType} from "../redux/user-reducer";
import classes from './Users.module.css'


type UsersPropsType = {
    users: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (e: Array<UserType>) => void
}

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) props.setUsers([
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShWytGxrZYTvSN-CpRkTBK0_4-eVpNWwRAA&usqp=CAU',
            status: 'Im boss',
            location: {
                city: 'Minks',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sasha',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShWytGxrZYTvSN-CpRkTBK0_4-eVpNWwRAA&usqp=CAU',
            status: 'Im boss too',
            location: {
                city: 'Ottawa',
                country: 'Canada'
            }
        },
        {
            id: 3,
            followed: false,
            fullName: 'Andrew',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShWytGxrZYTvSN-CpRkTBK0_4-eVpNWwRAA&usqp=CAU',
            status: 'Im boss too',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        }
    ])
    return (
        <div>
            {
                props.users.map(el =>
                    <div key={el.id}>
                    <span>
                        <div>
                               <img className={classes.photo} src={el.photo} alt={'photo'}/>
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
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>
                    </div>
                )
            }

        </div>
    )
}

export default Users