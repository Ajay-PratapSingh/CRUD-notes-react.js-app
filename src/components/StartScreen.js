import { Link } from "react-router-dom";
import "./StartScreen.css"
const StartScreen=(props)=>{
    return(
            <div className="card">
            <strong>Tell me Anything</strong>
            <p>This is a super simple crud application</p>
            <div className="button-wrapper">
            <Link to={"auth?mode=login"} className="btn">Login</Link>
            <Link to={"auth?mode=register"} className="btn">Register</Link>
            </div>
            </div>
    
    )
}
export default StartScreen;