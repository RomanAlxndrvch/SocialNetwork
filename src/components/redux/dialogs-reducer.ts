export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string,
    avatar: string
}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateNewMessageBody = { type: 'UPDATE_NEW_MESSAGE_BODY', newMessage: string }
export type AddNewMessage = { type: 'SEND_MESSAGE' }
export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBody | AddNewMessage

let initialState: DialogsPageType =
    {
        messages: [
            {id: 1, message: 'Hi :)'},
            {id: 2, message: 'How is your IT-kamasutra?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Yo!'},
        ],
        dialogs: [
            {
                id: 1,
                name: 'Dimych',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROlR6xZLWz4v7ZLeEZRn5W-d0RFIq_loCqgPtaoMK5nVHu3x8ty9cn-LGw01HBMbcnz3M&usqp=CAU'
            },
            {
                id: 2,
                name: 'Andrey',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQlX8kHgCFYgNqXisB6cWENyTofgINwzUOG_u6zBbliVuY_n5EwFl0W4k1b43X9HcsII&usqp=CAU'
            },
            {
                id: 3,
                name: 'Sveta',
                avatar: 'https://t4.ftcdn.net/jpg/02/45/28/17/360_F_245281721_2uYVgLSFnaH9AlZ1WWpkZavIcEEGBU84.jpg'
            },
            {
                id: 4,
                name: 'Sasha',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfF6nBhidhIzL330CYtg70I8tpDBGJ2YjBPnE9D9gY0iLmGu563WBIab4KBexSDv7kG8&usqp=CAU'
            },
            {
                id: 5,
                name: 'Viktor',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_0reNO6i6Vca5RNFEf_fHsoWbTi86fwYEmX61Wj8TBIb2WNtfIw7KX7FwZasSHjGoEQ&usqp=CAU'
            },
            {
                id: 6,
                name: 'Valery',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfJW5O8sjIwR9qwtci0d8yKu9yuflD-RreQnrkpQS9JGwqkJJRukoamCV4PV5BEqtS3o&usqp=CAU'
            }
        ],
        newMessageBody: '',
    }

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {

        case 'UPDATE_NEW_MESSAGE_BODY':
            return {...state, newMessageBody: action.newMessage}

        case 'SEND_MESSAGE':
            const newMessage: MessageType = {id: 1234, message: state.newMessageBody}
            return {...state, messages: [...state.messages, newMessage], newMessageBody: ''}

        default:
            return state
    }
}

export const updateNewMessageBodyCreator = (newMessage: string): UpdateNewMessageBody => ({
        type: 'UPDATE_NEW_MESSAGE_BODY',
        newMessage
    } as const
)

export const sendMessageCreator = (): AddNewMessage => (
    {type: 'SEND_MESSAGE'} as const)

export default dialogsReducer

