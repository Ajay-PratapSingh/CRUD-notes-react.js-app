import React from "react";
import { Fragment } from "react";
import "./Card.css";
const Card = (props) => {
    return (
        <Fragment>
            <div className="card">
                <strong>Title</strong>
                <p>{props.CardTitle}</p>
                <strong>Description</strong>
                <p>{props.CardDescription}</p>

                <button className="btn" onClick={() => { props.onDeleteItem(props.Id) }}>Delete</button>
            </div>
        </Fragment>
    )
}
export default Card;