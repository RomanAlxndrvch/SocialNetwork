import {AppDispatch, dispatchType} from "./redux-store";
import {AuthPageType, getAuthUserData} from "./auth-reducer";
import userReducer from "./user-reducer";

type AppStatusType = {
    initialized: boolean
}
export type AppActionType = ReturnType<typeof initializedSuccessAC>

let InitialState: AppStatusType = {
    initialized: false
}

export const appReducer = (state: AppStatusType = InitialState, action: AppActionType): AppStatusType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS': {
            return {...state, initialized: true}
        }

        default: {
            return state
        }

    }
}

const initializedSuccessAC = () => {
    return {
        type: 'INITIALIZED_SUCCESS'
    } as const
}


export const initializeTC = () => (dispatch: AppDispatch) => {
    getAuthUserData()
}

export default appReducer