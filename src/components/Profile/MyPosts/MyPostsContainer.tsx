import React from "react";
import {ActionsType,} from "../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {ProfileType} from "../Profile";

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {
    state: ProfileType
    dispatch: (e: ActionsType) => void
}

const MyPostsContainer = (props: ProfilePageType) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (e: string) => {
        props.dispatch(updateNewPostTextActionCreator(e))
    }

    return (
        <MyPosts posts={props.state.posts} addPost={addPost} onPostChange={onPostChange}
                 newPostText={props.state.newPostText}/>
    )
}

export default MyPostsContainer