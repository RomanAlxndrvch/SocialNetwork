import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/Textarea";
import {requiredFields} from "../utils/validators/validators";
import {connect} from "react-redux";
import {AuthPageType, login} from "../../redux/auth-reducer";
import {stateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import classes from './../common/FormsControls/FormsControls.module.css'

type formDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<formDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredFields]} placeholder={'Email'} component={Input}
                    // 77 lessen 40:00
                       name={'email'}/>
            </div>
            <div>
                <Field validate={[requiredFields]} placeholder={'Password'} component={Input}
                    // 77 lessen 40:00
                       name={'password'}/>
            </div>

            <div>

                <Field component={Input} type="checkbox" placeholder={'Checkbox'} name={'rememberMe'}/> Remember Me
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<formDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: formDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: stateType): { isAuth: boolean } => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)