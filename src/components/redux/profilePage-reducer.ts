import {ActionsType, AddPostActionType, PostType, ProfilePageType, UpdateNewPostTextActionType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''

            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;

        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export default profileReducer