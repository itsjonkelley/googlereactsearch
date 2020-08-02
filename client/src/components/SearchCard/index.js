import React from "react";

function SearchCard(props) {
    return (
      <form>
          <div class="card">
  <div class="card-body">
          <div className="form-group">
            <label htmlFor="search">Book Search:</label>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for a book"
                id="search"
            />
            <button onClick={props.handleFormSubmit} className="btn btn-primary"> 
                Search
            </button>
          </div>
          </div>
          </div>
      </form>  
    );
}

export default SearchCard;