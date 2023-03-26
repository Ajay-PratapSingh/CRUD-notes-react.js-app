import { Form, Link, useSearchParams } from "react-router-dom";
import "./Card.css"

const LoginForm = ({method,event}) => {

    const[searchParams]=useSearchParams();
    const isLogin=searchParams.get('mode')==='login';


    return (
        <Form method='post'>
                <div className="card">
                    <div>
                        <strong>{isLogin?"Please Login":"Please Register"}</strong>
                        <div >
                             <label htmlFor="email"> email</label>
                             <input id="email" type="email" name="email" className="form-control"required></input>
                        </div>
                        <div >
                            <label htmlFor="password"> Password</label>
                            <input id="password" type="password" name="password" className="form-control" required></input>
                        </div>
                        <div className="button-wrapper">
                        
                        <button className="btn">
                            Save
                        </button>
                        <Link to={`?mode=${isLogin?'signup':'login'}`} className="btn">
                            {isLogin?'Register':'Login'}
                        </Link>
                        </div>
                    </div>
                </div>
        </Form >
    )
}
export default LoginForm;