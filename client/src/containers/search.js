import React, { Component } from "react";
import SearchCard from "../components/SearchCard";
import API from "../utils/API";

class Search extends Component {

    state = {
        search: "",
        results: []
        };

    componentDidMount() {
        // console.log("Mounted");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({results:res.data.items})).then(console.log(this.state.results))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    }

    render() {
        return (
          <div className="container-fluid">
            <SearchCard
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />

            {this.state.results.map((book) => (
              <div className="card col-10 d-flex justify-content-around">
                <div className="col-lg-12" id={book.id} key={book.id}>
                  <div className="img-container">
                    <h2>Title: {book.volumeInfo.title}</h2>
                    <h4>By: {book.volumeInfo.authors}</h4>
                    <div className="row">
                      <div className="col-3">
                        <img
                          alt={book.volumeInfo.title}
                          src={book.volumeInfo.imageLinks.thumbnail}
                        />
                      </div>
                      <div className="col-9">
                        <h4>Synopsis:</h4>
                        <p>{book.volumeInfo.description}</p>
                      </div>
                    </div>

                    <a href={book.volumeInfo.infoLink}>Take me to the book!</a>
                    {/* <button><p onClick={() => props.handleSaveClick(props)}>SAVE</p></button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
}

export default Search;