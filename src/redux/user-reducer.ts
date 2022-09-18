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
    isFetching: boolean,
    followingInProgress: Array<number>
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
type toggleIsFollowingInProgress = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    payload: {
        isFetching: boolean
        userId: number
    }
}
type ActionCreator =
    followActionCreatorType |
    unfollowActionCreatorType |
    setUserActionCreatorType |
    setCurrentPage |
    setTotalUsersCount |
    toggleIsFetching |
    toggleIsFollowingInProgress

let InitialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.payload.isFetching ?
                    [...state.followingInProgress, action.payload.userId] :
                    state.followingInProgress.filter(el => el !== action.payload.userId)
            }
        }

        default: {
            return state
        }
    }
}

export const follow = (userId: number): followActionCreatorType => {
    return {
        type: "FOLLOW",
        payload: {
            userId
        }
    } as const
}
export const unfollow = (userId: number): unfollowActionCreatorType => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}
export const setUsers = (users: Array<UserType>): setUserActionCreatorType => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    }

}
export const setCurrentPage = (currentPage: number): setCurrentPage => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage
        }
    }
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCount => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        payload: {
            totalUsersCount
        }
    }
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetching => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            isFetching: isFetching
        }
    }
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): toggleIsFollowingInProgress => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        payload: {
            isFetching,
            userId

        }
    }
}

export default userReducer