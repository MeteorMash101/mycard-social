import classes from './SocialWidget.module.css'
import twitterLogoText from '../static/twitterLogoText.png'
import instagramLogoText from '../static/instagramLogoText.png'
import facebookLogoText from '../static/facebookLogoText.jpeg'
// EDIT: also add logo icon!
const SocialWidget = ({mediaType}) => {
    let mediaConfig = {}
    switch (mediaType) {
        case "TWITTER":
            mediaConfig.bgStyle = classes.twitterBG
            mediaConfig.logoText = twitterLogoText
            break;
        case "INSTAGRAM":
            mediaConfig.bgStyle = classes.instagramBG
            mediaConfig.logoText = instagramLogoText
            break;
        case "FACEBOOK":
            mediaConfig.bgStyle = classes.facebookBG
            mediaConfig.logoText = facebookLogoText
            break;
        default:
            mediaConfig.bgStyle = classes.defaultBG;
    }
    return (
        <div className={classes.container} id={mediaConfig.bgStyle}>
            <img className={classes.logoText} src={mediaConfig.logoText} alt="meow"/>
        </div>
    )
}

export default SocialWidget