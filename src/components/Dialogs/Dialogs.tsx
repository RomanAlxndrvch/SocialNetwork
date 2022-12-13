import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPageType, DialogType, MessageType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import Login from "../Login/Login";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import Textarea from "../common/FormsControls/Textarea";
import {maxLengthCreator, requiredFields} from "../utils/validators/validators";

type StatePropsType = {
    dialogsPage: DialogsPageType
    sendMessageCreator: (newMessage: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<StatePropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((person) => <DialogItem
        name={person.name}
        id={person.id}
        key={person.id}
        avatar={person.avatar}/>
    )
    let messagesElements = props.dialogsPage.messages.map((message) => <Message
        message={message.message}
        key={message.id}/>)

    const addNewMessage = (formData: AdMessageFormType) => {
        props.sendMessageCreator(formData.newMessage)
        formData.newMessage = ''
    }
    if (!props.isAuth) return <Redirect to={'/Login'}/>

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <ReduxAddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>


        </div>
    )
}

type AdMessageFormType = {
    newMessage: string
}

const maxLength40 = maxLengthCreator(40)
const AddMessageForm = (props: InjectedFormProps<AdMessageFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[requiredFields, maxLength40]}
                    placeholder={'Enter your message'}
                    component={Textarea}
                    name={'newMessage'}/>
            </div>

            <button>
                Send Message
            </button>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm<AdMessageFormType>({form: 'addMessage'})(AddMessageForm)

export default Dialogs
