export type AuthPageType = {
    userId: number,
    email: string,
    login: string,
}
type SetUserDataAcType = {
    type: 'SET_USER_DATA',
    data: AuthPageType
}

type ActionCreator = SetUserDataAcType

let InitialState = {
    userId: 0,
    email: '',
    login: '',
}
export const authReducer = (state: AuthPageType = InitialState, action: ActionCreator): AuthPageType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.data}
        }

        default: {
            return state
        }
    }
}

export const SetUserDataAC = (userId: number, email: string, login: string): SetUserDataAcType => {
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