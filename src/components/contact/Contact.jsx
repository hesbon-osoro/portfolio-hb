import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../context'
import Phone from '../../img/phone.png'
import './contact.css'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from 'emailjs-com'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        const serviceID = 'service_s0iwkv7'
        const templateID = 'template_nxw7r0q'
        e.preventDefault()
        emailjs.sendForm(serviceID, )
    }
}