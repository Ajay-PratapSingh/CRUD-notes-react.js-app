import { Fragment, useRef} from "react";
import './Login.css'

const LoginForm = (props) => {
    const usernameinputref=useRef();
    const passwordinputref=useRef();

    

    const LoginHandler = () => { 
        const username=usernameinputref.current.value;
        const password=passwordinputref.current.value;
        if(username!=='' && password!==''){
           
            props.onLogin();
            console.log(username);
            console.log(password);
            usernameinputref.current.value='';
            passwordinputref.current.value='';
        }
        
    }


    return (
        <Fragment>
            <section className="login-form-bd">
                <div className="form-wrapper">
                    <div className="form-container">
                        <h1> Please Login</h1>
                        <div class="form-control">
                            <input type="text" ref={usernameinputref}></input>
                            <label> Username</label>
                        </div>
                        <div className="form-control">
                            <input type="password" ref={passwordinputref}></input>
                            <label> Password</label>
                        </div>
                        <button className="login-btn" onClick={LoginHandler}>Login</button>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}
export default LoginForm;