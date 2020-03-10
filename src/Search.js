import React, { Component } from  'react';

class Search extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        let newSearch = e.target.newSearch.value;

        this.props.handleSearch ( newSearch);

        console.log(newSearch);
        console.log(this.props.booklist)
    }

    render() {
        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Search</label>
                <input name="newSearch" id="newSearch" type='text' />
                <button type='submit'>
                    Change Name
                </button>
            </form>
        )
    }
}

export default Search;