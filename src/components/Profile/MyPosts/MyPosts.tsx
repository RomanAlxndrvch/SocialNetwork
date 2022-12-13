import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredFields} from "../../utils/validators/validators";
import Textarea from "../../common/FormsControls/Textarea";

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
        props.addPost(formData.newPost)
        formData.newPost = ''
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
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

const letMaxLength10 = maxLengthCreator(10)

const ProfileTextForm = (props: InjectedFormProps<ProfileFormTexType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredFields, letMaxLength10]}
                   placeholder={'New Post'}
                   component={Textarea}
                   name={'newPost'}></Field>
            <button>Add Post!</button>
        </form>
    )
}

const AddPostForm = reduxForm<ProfileFormTexType>({form: 'newPost'})(ProfileTextForm)

export default MyPosts