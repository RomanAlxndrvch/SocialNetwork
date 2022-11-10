import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (e: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: ''
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status)
        this.setState({editMode: false})
        this.setState({status: ''})
    }
    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input onBlur={this.deactivateEditMode} type="text" value={this.state.status}
                               onChange={this.onChangeStatusHandler} autoFocus/>
                    </div> :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>}
            </div>
        );
    }
}

export default ProfileStatus;