import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsType,

} from "../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";

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
    newMessageBody: string
}
type StatePropsType = {
    state: DialogsType
    dispatch: (e: ActionsType) => void
}

const Dialogs: React.FC<StatePropsType> = (props) => {

    let dialogsElements = props.state.dialogs.map((person) => <DialogItem name={person.name} id={person.id}
                                                                          avatar={person.avatar}/>
    )
    let messagesElements = props.state.messages.map((message) => <Message message={message.message}/>)

    const newMessageBodyOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    const showTextAreaText = () => {
        props.dispatch(sendMessageCreator())
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
                            value={props.state.newMessageBody}
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
