import React from "react";
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

type FriendsType = {
    id: number,
    name: string,
    avatar: string
}
type FriendsPropType = {
    state: Array<FriendsType>
}

const Friends: React.FC<FriendsPropType> = (props) => {

    const friendsItems = props.state.map((el) => <Friend name={el.name} avatar={el.avatar}/>)

    return (
        <div className={classes.friendsElement}>
            <div className={classes.fiendsText}>Friends</div>
            <div className={classes.friendsItems}>
                {friendsItems}
            </div>
        </div>
    )
}

export default Friends