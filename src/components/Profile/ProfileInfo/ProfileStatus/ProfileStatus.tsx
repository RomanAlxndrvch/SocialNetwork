import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (e: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status)
        this.setState({editMode: false})
        this.setState({status: this.props.status})
    }
    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: typeof this.state) {
        if (this.props.status !== prevProps.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input onBlur={this.deactivateEditMode} type="text"
                               value={this.state.status}
                               onChange={this.onChangeStatusHandler} autoFocus/>
                    </div> :
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{this.props.status.length < 1 ? 'No Status!' : this.props.status}</span>
                    </div>}
            </div>
        );
    }
}

export default ProfileStatus;