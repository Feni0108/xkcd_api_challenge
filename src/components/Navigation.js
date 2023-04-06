import React from "react";

const Navigation = props => (
    <div>
        <div>
            <button onClick={props.getPreviousComics} className="btn btn-outline-dark m-1">Prev</button>
            <button onClick={props.getRandomComics} className="btn btn-outline-dark m-1">Random</button>
            <button onClick={props.getNextComics} className="btn btn-outline-dark m-1">Next</button>
        </div>
        <div>
            <button onClick={props.getFirstComics} className="btn btn-outline-dark m-1">First</button>
            <button onClick={props.getLastComics} className="btn btn-outline-dark m-1">Last</button>
        </div>
    </div>
)

export default Navigation;