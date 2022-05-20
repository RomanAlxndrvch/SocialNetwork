import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: ProfilePageType) => {

    let postElement = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) { // fix problem with "object may be null"
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>

            <div className={classes.posts}>
                <div>New Post</div>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts