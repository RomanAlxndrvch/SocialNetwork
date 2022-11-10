import {dispatchType} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    },
    fullName: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    photos: {
        large: string | undefined,
        small: string | undefined
    },
    userId: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
    status: string
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE',
    payload: {
        profile: ProfileType
    }
}
export type getUserStatusActionType = {
    type: 'SET_STATUS'
    payload: {
        status: string
    }
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileActionType
    | getUserStatusActionType

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: "It\'s my first post.", likesCount: 11},
        {id: 3, message: "Darova.", likesCount: 13},
        {id: 4, message: "LaLaLaLa.", likesCount: 14},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}

        case'SET_STATUS':
            return {...state, status: action.payload.status}

        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText};

        case "SET_USER_PROFILE":
            return {...state, profile: action.payload.profile}

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
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: "SET_USER_PROFILE",
        payload: {
            profile
        }
    }
}
export const setUserStatus = (status: string): getUserStatusActionType => {
    return {
        type: 'SET_STATUS',
        payload: {
            status
        }
    }
}

export const getUserProfile = (userId: string) => (dispatch: dispatchType) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getUserStatus = (userId: string) => (dispatch: dispatchType) => {
    profileAPI.getStatus(userId).then(
        (response) => {
            console.log(response.data)
            dispatch(setUserStatus(response.data))
        }
    )
}

export const updateStatus = (status: string) => (dispatch: dispatchType) => {
    profileAPI.updateStatus(status).then(
        (response) => {
            response.data.resultCode === 0 && dispatch(setUserStatus(status))
        }
    )
}

export default profileReducer