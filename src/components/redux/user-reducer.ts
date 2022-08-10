export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    photo: string,
    status: string,
    location: {
        city: string,
        country: string,
    }
}
export type UserPageType = {
    users: Array<UserType>
}

type followActionCreatorType = {
    type: 'FOLLOW'
    payload: {
        userId: number
    }

}
type unfollowActionCreatorType = {
    type: 'UNFOLLOW',
    payload: {
        userId: number
    }
}
type setUserActionCreatorType = {
    type: 'SET_USERS',
    payload: {
        users: Array<UserType>
    }
}

type ActionCreator =
    followActionCreatorType |
    unfollowActionCreatorType |
    setUserActionCreatorType

let InitialState = {
    users: []
}


export const userReducer = (state: UserPageType = InitialState, action: ActionCreator): UserPageType => {
    switch (action.type) {

        case "FOLLOW": {
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el
                )
            }
        }

        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el
                )
            }
        }

        case "SET_USERS": {
            return {
                ...state, users: [...state.users, ...action.payload.users]
            }
        }

        default: {
            return state
        }
    }
}

export const followAC = (userId: number): followActionCreatorType => {
    return {
        type: "FOLLOW",
        payload: {
            userId
        }
    } as const
}

export const unfollowAC = (userId: number): unfollowActionCreatorType => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (users: Array<UserType>): setUserActionCreatorType => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    }

}

export default userReducer