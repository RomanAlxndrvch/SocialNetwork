import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'/Login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}
