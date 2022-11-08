import React from "react";
import {
    DialogsPageType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {stateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type MapDispatchPropsType = {
    updateNewMessageBody: (e: string) => void
    sendMessageCreator: () => void
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (e: string) => {
            dispatch(updateNewMessageBodyActionCreator(e))

        },
        sendMessageCreator: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)


