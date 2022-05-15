import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>

            <div className={classes.descriptionBlock}>
                <img
                    src="https://icdn.lenta.ru/images/2021/12/13/00/20211213002603327/square_320_6df6f5217f0f0b3e856b6a0276c1d270.jpg"
                    alt=""/>
            </div>
        </div>
    )
}

export default ProfileInfo