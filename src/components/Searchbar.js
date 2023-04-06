import React from "react";

const Searchbar = props => (
    <div className="pt-5 mb-4">
        <h4 className="mb-3">Search Comics by ID</h4>
        <form onSubmit={props.getComicsById} className="form-inline d-flex justify-content-center">
            <input type="text" name="comicsID" placeholder="Comics number"></input>
            <button className="btn btn-sm btn-dark m-1">find</button>
        </form>
    </div>
    
);

export default Searchbar;