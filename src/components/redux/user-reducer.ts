type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string,
    }
}
type UserPageType = {
    users: Array<UserType>
}

type followActionCreatorType = {
    type: 'FOLLOW'
}
type unfollowActionCreatorType = {
    type: 'UNFOLLOW'
}
type ActionCreator = followActionCreatorType | unfollowActionCreatorType

let InitialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'Im boss',
            location: {
                city: 'Minks',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sasha',
            status: 'Im boss too',
            location: {
                city: 'Ottawa',
                country: 'Canada'
            }
        },
        {
            id: 3,
            followed: false,
            fullName: 'Andrew',
            status: 'Im boss too',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        }
    ]
}


export const userReducer = (state: UserPageType = InitialState, action: ActionCreator) => {
    switch (action.type) {
        case "FOLLOW": {
            return state
        }
        case "UNFOLLOW": {
            return state
        }
        default: {
            return state
        }
    }
}

export const followAC = (): followActionCreatorType => {
    return {
        type: "FOLLOW"
    } as const
}

export const unfollowAC = (): unfollowActionCreatorType => {
    return {
        type: 'UNFOLLOW'
    } as const
}