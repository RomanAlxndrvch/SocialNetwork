import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {stateType} from "../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../redux/user-reducer";
import axios from "axios";
import {Users} from "./Users";


type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}
type UsersPropsAPICompType = {
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

class UsersContainer extends React.Component<UsersPropsAPICompType, {}> {
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
        return (
            <div><Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
            /></div>
        );
    }
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

type MapDispatchPropsType = {
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }


    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default UserContainer