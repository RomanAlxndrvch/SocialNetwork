import React from "react";
import {ActionsType,} from "../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {ProfileType} from "../Profile";
import {storeType} from "../../redux/redux-store";

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {
    store: storeType
}

const MyPostsContainer = (props: ProfilePageType) => {
    const state = props.store.getState().profilePage

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (e: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(e))
    }

    return (
        <MyPosts posts={state.posts} addPost={addPost} onPostChange={onPostChange}
                 newPostText={state.newPostText}/>
    )
}

export default MyPostsContainer