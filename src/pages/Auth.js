import LoginForm from "../components/LoginForm";
import { redirect } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../config/firebase"
import { Fragment } from "react";

const Auth = () => {
    return (
        <Fragment>
        <p>user name: test1@test.com</p>
        <p>password: test123</p>
        <p>user name: test2@test.com</p>
        <p>password: test123</p>
        <LoginForm />
        </Fragment>
    )
}
export default Auth;

export async function action({ request }) {

    async function signup(auth,email, password) {
       await createUserWithEmailAndPassword(auth,email, password)
    }

    async function login(auth,email, password) {
        await signInWithEmailAndPassword(auth, email, password)
    }


    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    const data = await request.formData();
    const  email= data.get("email")
    const  password= data.get("password")

    if(mode==="login"){login(auth,email,password)}
    else{
        signup(auth,email,password);
        alert("New User Registered");
    };

    if(auth?.currentUser?.uid){
        return redirect('/entries');
    }

    return("/");
    
}
   