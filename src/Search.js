import React, { Component } from  'react';

class Search extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        
        let newBookList = e.target.newBookList.value;
        
        this.props.addBookList(newBookList);
        
        console.log( newBookList);
    }

    render() {
        return (
            <div>
                <h2>Search</h2>
                
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Search:</label>
                    <input
                        type='text'
                        name='newBookList'
                        id='search'
                        placeholder='Search your book'
                        value=''
                        />
                        <button>Search book</button>
                </form>
            </div>
        )
    }
}

export default Search;