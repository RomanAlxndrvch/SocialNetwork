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
    addPost: (e: string) => void
    onPostChange: (e: string) => void
    newPostText: string
}

const MyPosts = (props: ProfilePageType) => {
    const postElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    /*  const newPostElement = React.createRef<HTMLTextAreaElement>();*/

    const onAddPost = () => {
        props.addPost(props.newPostText)
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(props.newPostText)
        console.log()
        props.onPostChange((e.currentTarget.value))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}>Add post
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