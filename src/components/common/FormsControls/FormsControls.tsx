import React from "react";
import styles from './FormsControls.module.css'

const FormsControls = ({meta, input, ...props}: any) => {
    console.log(meta.error)
    return (
        <div className={meta.error ? styles.formControl + ' ' + styles.error : styles.formControl}>
            <div><textarea {...input} {...props}/></div>
            {meta.error && <span>Err</span>}
        </div>

    );
};

export default FormsControls;