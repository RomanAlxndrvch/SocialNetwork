import React from "react";
import Header from "./Header";
import {getAuthUserData, AuthPageType, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";


type HeaderContainerPropsType = {
    getAuthUserData: () => void
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       userId={this.props.userId}
                       email={this.props.email}
                       login={this.props.login}
                       logout={this.props.logout}
        />
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

const HeaderCont = connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
export default HeaderCont