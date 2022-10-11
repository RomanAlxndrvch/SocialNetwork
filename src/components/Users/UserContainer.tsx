import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow,
    UserType
} from "../../redux/user-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


type UsersPropsAPICompType = {
    users: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsAPICompType, {}> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers
})(UsersContainer)

export default UserContainer