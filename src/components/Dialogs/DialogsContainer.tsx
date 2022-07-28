import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsType,

} from "../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
import {storeType} from "../redux/redux-store";
import Dialogs from "./Dialogs";

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
    store: storeType
}

const DialogsContainer: React.FC<StatePropsType> = (props) => {
    const state = props.store.getState().dialogsPage

    const newMessageBodyOnChange = (e: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(e))
    }
    const showTextAreaText = () => {
        props.store.dispatch(sendMessageCreator())
    }

    return (
        <Dialogs state={state}
                 updateNewMessageBody={newMessageBodyOnChange}
                 sendMessageCreator={showTextAreaText}/>

    )
}

export default DialogsContainer
