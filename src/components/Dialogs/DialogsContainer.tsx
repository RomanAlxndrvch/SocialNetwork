import React from "react";
import {
    DialogsPageType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../redux/dialogs-reducer";
import {stateType, storeType} from "../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    updateNewMessageBody: (e: string) => void
    sendMessageCreator: () => void
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (e: string) => {
            dispatch(updateNewMessageBodyCreator(e))

        },
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect
(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
