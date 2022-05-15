import React from "react";
import classes from "./Friend.module.css";

type FriendPropsType = {
    name: string,
    avatar: string
}
// type FriendPropsType = {
//     friends: Array<FriendType>
// }


const Friend: React.FC<FriendPropsType> = (props: any) => {

    return (
        <div className={classes.friendElement}>
            <div><img className={classes.friendAvatar} src={props.avatar} alt=""/></div>
            <div className={classes.friendName}>{props.name}</div>
        </div>
    )
}

export default Friend