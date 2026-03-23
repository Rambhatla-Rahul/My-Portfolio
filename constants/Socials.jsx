import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const socials_list = [
    {
        id:'linkedIn-social',
        href:'https://www.linkedin.com/in/rahul-rambhatla-a38049310',
        label:"LinkedIn",
        icon:FaLinkedin,
        icon_color:"text-white",
        gif: "/icons8-linkedin.gif",
    },
    {
        id:'gmail-social',
        href:'https://mail.google.com/mail/?view=cm&fs=1&to=rrambhat@gitam.in',
        label:"Gmail",
        icon:SiGmail,
        icon_color:"text-white",
    },
    {
        id:'github-social',
        href:'https://github.com/Rambhatla-Rahul',
        label:"Github",
        icon:FaGithub,
        icon_color:"text-white",
    },
]