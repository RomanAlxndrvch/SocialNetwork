import React from "react";
import classes from "./DialogItem.module.css";
import DialogAvatar from "./DialogAvatar/DialogAvatar";
import {NavLink} from "react-router-dom";


// Main component,which this file return

type DialogsItemPropsType = {
    name: string;
    id: number;
    avatar: string
}
const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`}> <DialogAvatar avatar={props.avatar}/>{props.name}</NavLink>
        </div>
    )
}
export default DialogsItem