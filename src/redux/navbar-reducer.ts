import {ActionsType} from "./dialogs-reducer";

export {}
type FriendsType = {
    id: number,
    name: string,
    avatar: string
}
export type NavbarPageType = {
    friends: Array<FriendsType>
}

const initialState = {
    friends: [
        {
            id: 1,
            name: 'Andrew',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFD7rVDIsj77R6CBhfwmiidoHUQY76Ze4ShORloVE-_ECfbYnDCVri9odpInT7eHXyHw&usqp=CAU'
        },
        {
            id: 2,
            name: 'Sasha',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTze-2AbWgVO2gec7MY8iqNNg8wq-EQHAfX_X8gb7TR-znW5qTS0cWvHQl8BpRH3Up0Sic&usqp=CAU'
        },
        {
            id: 3,
            name: 'Sveta',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBJb0V9mwKFAoznIFdeWISIB_JR_XzIMYwA&usqp=CAU'
        }
    ]
}

const navbarReducer = (state: NavbarPageType = initialState, action: ActionsType) => {
    return state
}

export default navbarReducer