import React from "react";
import {UserType} from "../redux/user-reducer";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/149071.png'


type UsersPropsType = {
    users: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (e: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (TotalUsersCount: number) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}


class Users extends React.Component<UsersPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        let pagesCount = Math.ceil((this.props.totalUsersCount > 54 ? 54 : this.props.totalUsersCount) / this.props.pageSize)

        let pages: Array<number> = []
        for (let i = 1; i <= pagesCount; i++) {
            pages = [...pages, i]
        }

        return (
            <div>
                <div>
                    {pages.map(el => {
                        return <span onClick={() => {
                            this.onPageChanged(el)
                        }} className={this.props.currentPage === el ? classes.selectedPage : ''}>{el} </span>
                    })}
                </div>
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