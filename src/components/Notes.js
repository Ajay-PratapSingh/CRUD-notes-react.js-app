import { Fragment } from "react";
import Card from "./Card";
import Newentry from "./Newentry";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, redirect } from "react-router-dom";
const Notes=(props)=>{
    
    const displayentires=props.notes;
    console.log(displayentires);

    async function logout(){
        await signOut(auth);
    }

    return(
        <Fragment>
            <h1>Welcome to your board</h1>
            <Link to={"/"} onClick={logout} className="btn">Log-out</Link>
            <Newentry onSaveItem={props.onNewSave}></Newentry>
            {displayentires.length>0 && displayentires.map((note)=>
            <Card 
            Id={note.id}
            onDeleteItem={props.onDelete}
            CardTitle={note.Title}
            CardDescription={note.Description}>
            </Card>)}
        </Fragment>
    )
}
export default Notes;