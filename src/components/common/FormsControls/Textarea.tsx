import React, {HTMLInputTypeAttribute} from "react";
import styles from './FormsControls.module.css'
import {WrappedFieldInputProps, WrappedFieldMetaProps} from 'redux-form/lib/Field'

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autoFocus?: boolean
}

// 77 lessen 40:00

const FormControl = ({meta, input, ...props}: FormsControls) => {
    const hasError = meta.error && meta.touched

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div><textarea {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>

    );
}

const Textarea = ({meta, input, ...props}: FormsControls) => {
    const hasError = meta.error && meta.touched

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div><textarea {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>

    );
};

export default Textarea;


export const Input = ({meta, input, ...props}: FormsControls) => {
    const hasError = meta.error && meta.touched

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div><input {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>

    );
};
