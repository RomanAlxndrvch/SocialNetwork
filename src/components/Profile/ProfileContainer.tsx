import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostType, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {stateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    posts: Array<PostType>
    newPostText: string
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
}
type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}
type DataContainerComponentType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<DataContainerComponentType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '25295'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent)