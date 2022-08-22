import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {stateType} from "../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../redux/user-reducer";
import Users from "./Users";


type MapStateToPropsType = {
    users: Array<UserType>
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

type MapDispatchPropsType = {
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
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
        }

    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer