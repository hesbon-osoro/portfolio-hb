import Award from '../../img/award.png'
import './about.css'

const About = () => {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src="../../img/portifolio.jpeg" alt="" className='a-img'/>
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    It is a long established fact that a reader will be distracted by the readable content.
                </p>
                <p className='a-desc'>
                    I am Hesbon Osoro. <br />
                    Web Development has been a long desire since I started interactions with the technology world. I love taking code ...
                </p>
                <div className='a-award'>
                    <img src={Award} alt="" className='a-award-img'/>
                    <div className='a-award-title'>
                        <h4>Google Devfest India 2021</h4>
                        <p className='a-award-desc'>This is the award I received after signing up to attend Google Developer Devfest India, &copy;2021</p>
                </div>
                </div>                
            </div>
        </div>
    );
}

export default About;
