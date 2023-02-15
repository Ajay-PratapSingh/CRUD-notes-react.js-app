import { Fragment,useState } from "react"
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
        const items ={Title:EnteredTitle,Description:EnteredDescription}
        if(EnteredTitle!=="" && EnteredDescription!==""){
            props.onSaveItem(items);
            setTitle('');
            setDescription('');
        }
    }

    return (
        <Fragment>
            <section className="form-wrapper">
                <div className="form-container">
                    <div><h3>Add New</h3></div>
                    <div className="form-control input">
                        <input type="text" value={EnteredTitle} onChange={TitleChangeHandler}></input>
                        <label>Title</label>
                    </div>
                    <div className="form-control input">
                        <input type="text" value={EnteredDescription} onChange={DescriptionChangeHandler}></input>
                        <label>Description</label>
                    </div>
                    <button className="btn" onClick={SaveHandler}>save</button>
                </div>
            </section>
        </Fragment>
    )
}
export default Newentry;