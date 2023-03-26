import { Fragment,useState } from "react"
import { auth } from "../config/firebase";
import "./Card.css";

const Newentry = (props) => {

    const [EnteredTitle, setTitle] = useState('');
    const [EnteredDescription, setDescription] = useState('');

    const TitleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const DescriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    const SaveHandler = () => {
        const items ={Title:EnteredTitle,Description:EnteredDescription,UserId:auth?.currentUser?.uid}
        if(EnteredTitle!=="" && EnteredDescription!==""){
            props.onSaveItem(items);
            setTitle('');
            setDescription('');
        }
    }

    return (
        <Fragment>
                <div className="card">
                    <h3>Add New</h3>
                    <div ><strong>Title</strong>
                        <input type="text" value={EnteredTitle} onChange={TitleChangeHandler}className="form-control"></input>
                        
                    </div>
                    <div > <strong>Description</strong>
                        <input type="text" value={EnteredDescription} onChange={DescriptionChangeHandler}className="form-control"></input>
                       
                    </div>
                    <button className="btn" onClick={SaveHandler}>save</button>
                </div>
        </Fragment>
    )
}
export default Newentry;