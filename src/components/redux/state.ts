type PostType = {
    id: number,
    message: string,
    likesCount: number
}
type MessageType = {
    id: number,
    message: string
}
type DialogType = {
    id: number,
    name: string,
    avatar: string
}
type FriendsType = {
    id: number,
    name: string,
    avatar: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
type FriendsPageType = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sidebar: FriendsPageType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (e: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: any) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ActionsType = AddPostActionType | UpdateNewPostTextActionType

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 12},
                {id: 2, message: "It\'s my first post.", likesCount: 11},
                {id: 3, message: "Darova.", likesCount: 13},
                {id: 4, message: "LaLaLaLa.", likesCount: 14},
            ],
            newPostText: ''
        },

        dialogsPage: {
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
        },

        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Andrew',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFD7rVDIsj77R6CBhfwmiidoHUQY76Ze4ShORloVE-_ECfbYnDCVri9odpInT7eHXyHw&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTze-2AbWgVO2gec7MY8iqNNg8wq-EQHAfX_X8gb7TR-znW5qTS0cWvHQl8BpRH3Up0Sic&usqp=CAU'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBJb0V9mwKFAoznIFdeWISIB_JR_XzIMYwA&usqp=CAU'
                }
            ]

        }
    },
    _callSubscriber(e: RootStateType) {
        console.log('State Changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer // Pattern : Observer
    },

    dispatch(action: ActionsType) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }

        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


export default store
