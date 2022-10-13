import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PostType, ProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";


export type ProfilePropsType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void
}
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile