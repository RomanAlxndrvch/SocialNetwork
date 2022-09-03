import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostType, ProfileType, setUserProfile} from "../redux/profile-reducer";
import {stateType} from "../redux/redux-store";

type ProfileContainerPropsType = {
    posts: Array<PostType>
    newPostText: string
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }

}

type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}
const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)