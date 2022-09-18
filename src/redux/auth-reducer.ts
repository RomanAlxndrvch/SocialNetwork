export type AuthPageType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}
type SetUserDataAcType = {
    type: 'SET_USER_DATA',
    data: {
        userId: number,
        email: string,
        login: string,
    }
}

type ActionCreator = SetUserDataAcType

let InitialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}
export const authReducer = (state: AuthPageType = InitialState, action: ActionCreator): AuthPageType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.data, isAuth: true}
        }

        default: {
            return state
        }
    }
}

export const SetAuthUserDataAC = (userId: number, email: string, login: string): SetUserDataAcType => {
    return {
        type: 'SET_USER_DATA' as const,
        data: {
            userId,
            login,
            email
        }
    }
}


export default authReducer