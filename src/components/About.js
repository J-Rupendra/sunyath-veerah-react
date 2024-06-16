import User from "./User"
import UserClass from "./UserClass"


const About = () => (
    <div className="about-container" >
        <h1>Here is the info about us</h1>
        <h2>Contact us: @email</h2>
        <User name="Rupe" location="Visakhapatnam" />
        <UserClass name="Rupe" location="Visakhapatnam" />
    </div>
)

export default About