import {AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'

export const links =[
    {id: 1, links: '#', title: 'Home'},
    {id: 2, links: '#about', title: 'About'},
    {id: 3, links: '#services', title: 'Services'},
    {id: 4, links: '#portfolio', title: 'Portfolio'},
    {id: 5, links: '#contact', title: 'Contact'}
]
export const socials =
[
    {id: 1, link: 'https://www.linkedin.com/in/sachin-kumawat-946269212/' , icon : <FaLinkedinIn/>},
    {id: 2, link: 'https://www.instagram.com/itx_sachin04/?igshid=NzZlODBkYWE4Ng%3D%3D' , icon : <AiOutlineInstagram/>},
    {id: 3, link: 'https://github.com/kmwtsachin04' , icon : <AiOutlineGithub/>},
    {id: 4, link: 'https://twitter.com/i/flow/login?redirect_after_login=%2Fitx_sachin04' , icon : <FaXTwitter/>}
]