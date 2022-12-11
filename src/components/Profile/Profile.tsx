import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PostType, ProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";


export type ProfilePropsType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
    setUserProfile: (profile: ProfileType) => void
    updateStatus: (status: string) => void
}
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile