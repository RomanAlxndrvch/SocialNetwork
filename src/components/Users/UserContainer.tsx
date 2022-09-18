import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/user-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersPropsAPICompType = {
    users: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (e: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (TotalUsersCount: number) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

class UsersContainer extends React.Component<UsersPropsAPICompType, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <div><Users totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                            followingInProgress={this.props.followingInProgress}
                /></div>
            </>
        );
    }
}

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


const UserContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress
})(UsersContainer)

export default UserContainer