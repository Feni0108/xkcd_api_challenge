import React from "react";

const Comics = props => (
    <div className="container my-4">
        { props.title && <p>{props.title}</p> } 
        <p>{props.error}</p>
        <div>
            <img src={props.url}/>
        </div>
    </div>
);

export default Comics;