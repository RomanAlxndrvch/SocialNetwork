import React from "react";
import Header from "./Header";
import axios from "axios";
import {AuthPageType} from "../redux/auth-reducer";
import {connect} from "react-redux";
import {stateType} from "../redux/redux-store";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/`).then(response => {

        })
    }

    render() {
        return <Header/>
    }
}

type MapStateToPropsType = {
    userId: number,
    email: string,
    login: string,
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    }
}


const HeadeContainer = connect({mapStateToProps}, {})(HeaderContainer)

export default HeaderContainer