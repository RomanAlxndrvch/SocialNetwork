import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {}

/*const MyPostsContainer = (props: ProfilePageType) => {
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
}*/

type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    onPostChange: (e: string) => void
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (newText: string) => {
            dispatch(updateNewPostTextActionCreator(newText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer