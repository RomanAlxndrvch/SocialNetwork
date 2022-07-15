import {ActionsType, AddNewMessage, DialogsPageType, MessageType, UpdateNewMessageBody} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessage
            return state
        case SEND_MESSAGE:
            const newMessage: MessageType = {id: 1234, message: state.newMessageBody}
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyCreator = (newMessage: string): UpdateNewMessageBody => ({
    type: "UPDATE_NEW_MESSAGE_BODY", newMessage: newMessage
})
export const sendMessageCreator = (): AddNewMessage => ({type: SEND_MESSAGE})


export default dialogsReducer

