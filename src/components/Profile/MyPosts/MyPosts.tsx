import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
    addPost: () => void
    updatePostText: (newText: string) => void
}

const MyPosts = (props: ProfilePageType) => {

    const postElement = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            newPostElement.current.value = ''
        }
        props.addPost()

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
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
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts