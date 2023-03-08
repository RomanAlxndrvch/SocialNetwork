import {stateType} from "./redux-store";

export const getUsers = (state: stateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: stateType) => {
    return state.usersPage.pageSize
}


export const currentPage = (state: stateType) => {
    return state.usersPage.currentPage
}


export const isFetching = (state: stateType) => {
    return state.usersPage.isFetching
}


export const followingInProgress = (state: stateType) => {
    return state.usersPage.followingInProgress
}


export const totalUsersCount = (state: stateType) => {
    return state.usersPage.totalUsersCount
}


