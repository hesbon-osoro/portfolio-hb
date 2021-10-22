import Project from '../project/Project'
import { projects } from '../../data'
import './projectList.css'


const Productlist = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'>Create & Inspire.<br />It's Wazimu</h1>
                <p className='pl-desc'>
                    Wazimu is a creative portfolio that your work has been waiting for.<br />
                    Beautiful websites, stunning portfolio styles & a whole lot more awaits.
                </p>
            </div>
            <div className='pl-list'>
                {
                    projects.map((project =>(
                        <Project key={project.id} 
                            img={project.img}
                            link={project.link}
                        />
                    )))
                }
            </div>
        </div>
    );
}

export default Productlist;
