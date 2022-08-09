import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPageType, DialogType, MessageType} from "../redux/dialogs-reducer";

type StatePropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (e: string) => void
    sendMessageCreator: () => void
}

const Dialogs: React.FC<StatePropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((person) => <DialogItem
        name={person.name}
        id={person.id}
        key={person.id}
        avatar={person.avatar}/>
    )
    let messagesElements = props.dialogsPage.messages.map((message) => <Message
        message={message.message}
        key={message.id}/>)

    const newMessageBodyOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }
    const showTextAreaText = () => {
        props.sendMessageCreator()
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={props.dialogsPage.newMessageBody}
                            onChange={newMessageBodyOnChange}
                        ></textarea>
                    </div>
                    <div>
                        <button className={classes.messageBtn} onClick={showTextAreaText}>Btn</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs
