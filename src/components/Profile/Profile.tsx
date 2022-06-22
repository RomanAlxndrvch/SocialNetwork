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
    newPostText: string
}
type StatePropsType = {
    state: ProfileType
    addPost: () => void
    updatePostText: (newText: string) => void

}

const Profile: React.FC<StatePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}/>
        </div>
    )
}

export default Profile