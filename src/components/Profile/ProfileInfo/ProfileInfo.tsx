import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from './../../../assets/images/149071.png'

type ProfileInfoPropsType = { profile: ProfileType | null }

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    else {
        return (
            <div>
                <div>
                    <img
                        src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300"
                        alt=""/>
                </div>

                <div className={classes.descriptionBlock}>
                    <img
                        src={props.profile.photos.large ? props.profile.photos.large : avatar} alt={'avatar'}/>
                </div>
                <div>
                    {props.profile.fullName}
                </div>
            </div>
        )
    }
}

export default ProfileInfo