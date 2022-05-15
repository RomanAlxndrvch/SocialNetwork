import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

type DialogType = {
    id: number,
    name: string,
    avatar: string
}
type MessagesType = {
    id: number,
    message: string
}
type DialogsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessagesType>
}
type StatePropsType = {
    state: DialogsType
}

const Dialogs: React.FC<StatePropsType> = (props) => {

    let dialogsElements = props.state.dialogs.map((person) => <DialogItem name={person.name} id={person.id}
                                                                          avatar={person.avatar}/>
    )
    let messagesElements = props.state.messages.map((message) => <Message message={message.message}/>)

    const messageTextArea = React.useRef<HTMLTextAreaElement>(null)

    const showTextAreaText = () => {
        console.log(messageTextArea.current!.value)
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
            <textarea ref={messageTextArea}></textarea>
            <button className={classes.messageBtn} onClick={showTextAreaText}>Btn</button>

        </div>
    )
}

export default Dialogs
