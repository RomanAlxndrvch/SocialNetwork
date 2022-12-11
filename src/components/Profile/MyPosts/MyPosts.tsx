import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
    addPost: (newPost: string) => void
}

const MyPosts = (props: ProfilePageType) => {
    const postElements = props.posts.map((post, index) => <Post key={index} message={post.message}
                                                                likesCount={post.likesCount}/>)

    const onAddPost = (formData: ProfileFormTexType) => {
        console.log(formData)
        props.addPost(formData.newPost)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                {/*<div>*/}
                {/*    <textarea onChange={onPostChange} value={props.newPostText}/></div>*/}
                {/*<div>*/}
                {/*    <button onClick={onAddPost}>Add post*/}
                {/*    </button>*/}
                {/*</div>*/}
                <AddPostForm onSubmit={onAddPost}/>
            </div>

            <div className={classes.posts}>
                <div>New Post</div>
                {postElements}
            </div>
        </div>
    )
}

type ProfileFormTexType = {
    newPost: string
}

const ProfileTextForm = (props: InjectedFormProps<ProfileFormTexType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'New Post'} component={'input'} name={'newPost'}></Field>
            <button>Add Post!</button>
        </form>
    )
}

const AddPostForm = reduxForm<ProfileFormTexType>({form: 'newPost'})(ProfileTextForm)

export default MyPosts