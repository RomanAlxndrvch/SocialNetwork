export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type UpdateNewMessageBody = { type: 'UPDATE_NEW_MESSAGE_BODY', newMessage: string }
type AddNewMessage = { type: 'SEND_MESSAGE' }
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBody | AddNewMessage

const initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: "It\'s my first post.", likesCount: 11},
        {id: 3, message: "Darova.", likesCount: 13},
        {id: 4, message: "LaLaLaLa.", likesCount: 14},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}

        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return {...state, newPostText: action.newText};

        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: 'ADD-POST'} as const)
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export default profileReducer