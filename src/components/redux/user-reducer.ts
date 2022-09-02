export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    location: {
        city: string,
        country: string,
    }
}
export type UserPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
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
type setCurrentPage = {
    type: 'SET_CURRENT_PAGE',
    payload: {
        currentPage: number
    }
}
type setTotalUsersCount = {
    type: "SET_TOTAL_USERS_COUNT",
    payload: {
        totalUsersCount: number
    }
}
type toggleIsFetching = {
    type: "TOGGLE_IS_FETCHING"
    payload: {
        isFetching: boolean
    }
}
type ActionCreator =
    followActionCreatorType |
    unfollowActionCreatorType |
    setUserActionCreatorType |
    setCurrentPage |
    setTotalUsersCount |
    toggleIsFetching

let InitialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.payload.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
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

export const setCurrentPageAC = (currentPage: number): setCurrentPage => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage
        }
    }
}

export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCount => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        payload: {
            totalUsersCount
        }
    }
}
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetching => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            isFetching: isFetching
        }
    }
}

export default userReducer