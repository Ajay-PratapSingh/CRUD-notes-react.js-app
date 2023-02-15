import "./App.css"
const StartScreen=(props)=>{
    return(
        <div className="ss-main">
        <section className="ss-form-wrapper">
            <div className="form-container">
            <h1>Tell me Anything</h1>
            <h2>This is a super simple crud application</h2>
            <button className="btn" onClick={props.onLogin}>Login</button>
            <button className="btn">Register</button>
            </div>
        </section>
        </div>
    )
}
export default StartScreen;