import React from "react";
import { Fragment } from "react";
import "./Card.css";
const Card = (props) => {

    const DeleteHandler = () => {
            const itemtodel = {Title: props.CardTitle, Description: props.CardDescription}
            props.onDeleteItem(itemtodel);
    }

    return (
        <Fragment>
            <section className="form-wrapper">
                <div className="form-container">
                        <h3>{props.CardTitle}</h3>
                        <span className="span"></span>
                        <h3>{props.CardDescription}</h3>
                    <button className="btn"
                        onClick={DeleteHandler}
                    >Delete</button>
                </div>
            </section>
        </Fragment>
    )
}
export default Card;