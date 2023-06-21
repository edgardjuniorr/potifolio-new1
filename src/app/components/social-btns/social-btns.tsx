import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/esgardjunior/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/edgard-junior-020b7913b/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/edgardjuniorr">
                <GitHubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )
}