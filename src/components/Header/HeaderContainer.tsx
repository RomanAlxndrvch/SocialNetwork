import React from "react";
import Header from "./Header";
import axios from "axios";
import {AuthPageType, SetAuthUserDataAC} from "../redux/auth-reducer";
import {connect} from "react-redux";
import {stateType} from "../redux/redux-store";


type HeaderContainerPropsType = {
    SetAuthUserDataAC: (userId: number, email: string, login: string) => void
    userId: number
    email: string
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.SetAuthUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login)
            }
        })
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       userId={this.props.userId}
                       email={this.props.email}
                       login={this.props.login}/>
    }
}

const mapStateToProps = (state: stateType): AuthPageType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const HeaderCont = connect(mapStateToProps, {SetAuthUserDataAC})(HeaderContainer)
export default HeaderCont