import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../context'
import Phone from '../../img/phone.png'
import './contact.css'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs,{ init } from 'emailjs-com';

init("user_UOVIuQqx1Ttnep7nR98fl");

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        const serviceID = 'service_s0iwkv7'
        const templateID = 'template_nxw7r0q'
        const userID='user_UOVIuQqx1Ttnep7nR98fl'
        // const accessToken='71f7ccd9782fed433f8c51824616dd12'
        // const templateParams = {
        //     name: 'Hesbon',
        //     message: 'Thank you for reaching out.\nKind Regards,\nHesbon Osoro(Wazimu)'
        // }
        e.preventDefault()
        emailjs.sendForm(
            serviceID,
            templateID,
            formRef.current,
            userID
        ).then(res => {
            console.log(res.text)
            setDone(true)
        }).catch(err => {
            console.log(err.text)
        })
    }
    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Let's discuss your project</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={Phone} alt="" className='c-icon'/>
                            +254 792 496 898
                        </div>
                        <div className='c-info-item'>
                            <img src={Email} alt="" className='c-icon'/>
                            hesbonosoro1@gmail.com
                        </div>
                        <div className='c-info-item'>
                            <img src={Address} alt="" className='c-icon'/>
                            00100 Nairobi, Kenya.
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' style={{backgroundColor: darkMode && '#333', color: darkMode && '#fff'  }}
                        required/>
                        <input type="text" placeholder='Subject' name='user_subject' style={{backgroundColor: darkMode && '#333', color: darkMode && '#fff' }
                        }/>
                        <input type="text" placeholder='Email' name='user_email' style={{backgroundColor: darkMode && '#333', color: darkMode && '#fff' }}
                        required/>
                        <textarea style={{backgroundColor: darkMode && '#333', color: darkMode && '#fff' }} placeholder="Message" rows="5" name="message" required/>
                        <button>Submit</button>
                        {done && "\tThank you ..."}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact