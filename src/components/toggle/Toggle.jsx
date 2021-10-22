import { useContext } from 'react'
import { ThemeContext } from '../../context'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import './toggle.css'

import { ACTIONS } from '../../context'
const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type: ACTIONS.TOGGLE})
    }
    return (
        <div className='t'>
            <img src={Sun} alt="" className='t-icon'/>
            <img src={Moon} alt="" className='t-icon'/>
            <div className='t-button'
                onClick={handleClick}
                style={{ left: theme.state.darkMode ? 0: 25}}
            >
            </div>
        </div>
    );
}

export default Toggle;
