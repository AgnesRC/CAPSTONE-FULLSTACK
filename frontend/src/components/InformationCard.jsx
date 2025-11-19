import profileImage from '../assets/profile.jpeg'


export default function InformationCard () {
    
    return (
        <div>
            <p>
            Hello. I am Agnes.
            I'm an interdisciplinary software engineer passionate about human-centered designs and systems.
            </p>
            <button> View My Work </button>
            <img src={profileImage} />
        </div>
    )
}