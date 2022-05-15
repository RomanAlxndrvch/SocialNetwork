import React from "react";
import classes from './Post.module.css'

type PostPropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://static.parade.com/wp-content/uploads/2021/04/funny-photos2-1-e1617576745514.jpg" alt=""/>

            {props.message}

            <div>
                Likes {props.likesCount}
            </div>

        </div>
    )
}


export default Post