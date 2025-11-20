export default function ContactForm () {
    return (
        <form className="contact-form">
            <h2> Contact Me </h2>
            <input type="text" placeholder="Full Name"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Your Message"/>
            <button> Submit Message </button>
        </form>
    )
}