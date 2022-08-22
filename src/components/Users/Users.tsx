import React, {MouseEventHandler} from "react";
import {UserType} from "../redux/user-reducer";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/149071.png'


type UsersPropsType = {
    users: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (e: Array<UserType>) => void
}


class Users extends React.Component<UsersPropsType, {}> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(el =>
                            <div key={el.id}>
                    <span>
                        <div>
                               <img className={classes.photo}
                                    src={el.photos.small !== null ? el.photos.small : userPhoto}
                                    alt={'photo'}/>
                        </div>
                        <div>
                            {
                                el.followed ?
                                    <button onClick={() => {
                                        this.props.unfollow(el.id)
                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() => {
                                        this.props.follow(el.id)
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
        );
    }
}

export default Users