import React, { Component } from 'react';
import Search from './Search'
import './App.css';
import Header from './Header'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      booklist: []
    };
  }
  
  retreiveBooklist() {
    const url = 'https://www.googleapis.com/books/v1/{}'
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer AIzaSyBEGeoquEp6hiu91xgPGqre9MdPv5g1Ioc",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          booklist: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }


  addBooklist(book) {
    this.setState({
      booklists: [...this.state.booklist, book]
    })
  }
   
  
  render() {
    
          

    return (
      <div className="App">
        <Header />
       <Search
        handleAdd={books => this.addBooklist(books)}  
       />
       
      </div>
    );
  }
}
export default App;
