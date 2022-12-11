import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {stateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type MapStateToPropsType = {
    posts: Array<PostsType>
}
type MapDispatchPropsType = {
    addPost: (newPost: string) => void
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostActionCreator(newPost))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer