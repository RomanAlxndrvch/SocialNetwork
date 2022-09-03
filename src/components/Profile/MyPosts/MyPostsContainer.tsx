import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
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