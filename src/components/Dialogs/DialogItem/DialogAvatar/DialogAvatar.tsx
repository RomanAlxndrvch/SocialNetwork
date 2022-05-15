import React from "react";
import classes from "./DialogAvatar.module.css";

type DialogAvatarPropsType = {
    avatar: string
}

const DialogAvatar: React.FC<DialogAvatarPropsType> = (props) => {
    return (
        <img className={classes.avatar} src={props.avatar} alt=""/>
    )
}

export default DialogAvatar