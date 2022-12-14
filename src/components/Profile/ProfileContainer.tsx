import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    PostType,
    ProfileType,
    getUserProfile,
    setUserProfile,
    getUserStatus,
    updateStatus
} from "../../redux/profile-reducer";
import {stateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    posts: Array<PostType>
    newPostText: string
    status: string
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
    profile: ProfileType | null
    authorizedUserId: number | null
    isAuth: boolean
}
type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type DataContainerComponentType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<DataContainerComponentType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = `${this.props.authorizedUserId}`
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        setUserProfile, getUserProfile, getUserStatus, updateStatus
    }),
    withRouter
)(ProfileContainer)
