import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type formDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<formDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'}/>
            </div>

            <div>
                <Field component={'input'} type="checkbox" placeholder={'Checkbox'} name={'rememberMe'}/> Remember Me
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<formDataType>({form: 'login'})(LoginForm)

const Login = () => {

    const onSubmit = (formData: formDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login