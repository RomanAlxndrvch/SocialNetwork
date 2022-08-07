import React from "react";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
import {storeType} from "../redux/redux-store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

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
type StatePropsType = {}

const DialogsContainer: React.FC<StatePropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage

                const newMessageBodyOnChange = (e: string) => {
                    store.dispatch(updateNewMessageBodyCreator(e))
                }
                const showTextAreaText = () => {
                    store.dispatch(sendMessageCreator())
                }

                return <Dialogs state={state}
                                updateNewMessageBody={newMessageBodyOnChange}
                                sendMessageCreator={showTextAreaText}/>
            }}
        </StoreContext.Consumer>

    )
}

const SuperDialogContainer = connect()(Dialogs)

export default DialogsContainer
