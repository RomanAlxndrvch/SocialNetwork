import React from "react";
import {
    DialogsPageType,
    sendMessageActionCreator
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
    sendMessageCreator: (newMessage: string) => void
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessageCreator: (newMessage: string) => {
            dispatch(sendMessageActionCreator(newMessage))
        }
    }
}
export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)


