import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {}

const MyPostsContainer = (props: ProfilePageType) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().profilePage

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (e: string) => {
                    store.dispatch(updateNewPostTextActionCreator(e))
                }

                return <MyPosts posts={state.posts}
                                addPost={addPost}
                                onPostChange={onPostChange}
                                newPostText={state.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer