import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (e: string) => void
}


const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState('')

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        props.updateStatus(status)
        setEditMode(false)
    }

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode ?
                <div>
                    <input onBlur={deactivateEditMode} type="text"
                           value={status}
                           onChange={onChangeStatusHandler} autoFocus/>
                </div> :
                <div>
                        <span
                            onDoubleClick={activateEditMode}>{props.status.length < 1 ? 'No Status!' : props.status}</span>
                </div>}
        </div>
    );

}

export default ProfileStatusWithHooks;