import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType} from "../../redux/state";

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
        props.dispatch({type: "ADD-POST"})
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action: ActionsType = {type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value}
        props.dispatch(action)
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