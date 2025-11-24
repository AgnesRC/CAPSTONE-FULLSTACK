import { Link } from 'react-router-dom'
import profileImage from '../assets/profile.jpeg'


export default function InformationCard () {
    
    return (
        <div className='information-card'>
            <section>
            <p>
            Hello. I am Agnes.
            I'm an interdisciplinary software engineer passionate about human-centered designs and systems.
            </p>
            <Link to="/projects">
                <button> View My Work </button>
            </Link>
            </section>
            <section>
            <img src={profileImage} className="profile-image" />
            </section>
        </div>
    )
}