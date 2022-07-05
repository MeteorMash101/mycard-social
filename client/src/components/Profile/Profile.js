import classes from "./Profile.module.css";
import SocialWidget from "../SocialWidget";

const Profile =  () => {
    return (
        <div className={classes.container}>Hello
            <div className={classes.widgetContainer}>
                <SocialWidget mediaType={"TWITTER"}/>
                <SocialWidget mediaType={"INSTAGRAM"}/>
                <SocialWidget mediaType={"FACEBOOK"}/>
            </div>
        </div>
    )
}

export default Profile;