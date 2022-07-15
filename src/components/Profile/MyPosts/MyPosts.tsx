import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    ActionsType,
    AddPostActionType,
    UpdateNewPostTextActionType
} from "../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profilePage-reducer";

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
    dispatch: (e: ActionsType) => void
}


const MyPosts = (props: ProfilePageType) => {
    const postElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            newPostElement.current.value = ''
        }
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}/></div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>

            <div className={classes.posts}>
                <div>New Post</div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts