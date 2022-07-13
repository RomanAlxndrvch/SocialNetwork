import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../redux/state";

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
    dispatch: (e: ActionsType) => void

}

const Profile: React.FC<StatePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile