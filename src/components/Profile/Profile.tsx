import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PostType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfileType = {
    posts: Array<PostType>
}
type StatePropsType = {
    state: ProfileType
    addPost: (postMessage: string) => void
}

const Profile: React.FC<StatePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile