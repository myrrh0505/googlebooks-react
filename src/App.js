import React, { Component } from 'react';
import Search from './Search'
import './App.css';
import Header from './Header';
import ShowInfo from './ShowInfo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      booklist: []
    };


    this.getBookList = () => {
      fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter&key=AIzaSyBEGeoquEp6hiu91xgPGqre9MdPv5g1Ioc')
          .then(res => res.json())
          
          .then(json => {
            console.log(json)
            this.setState({
              booklist: json.items
              ,
              
            })
          })
          
    }
    
  }

 

 
  
  
  render() {
      
         console.log(this.state.booklist)
   
         

    return (
     
      
      <div className="App">
        <Header />
       <Search handleSearch={this.getBookList}/>
       <ShowInfo books={this.state.booklist}/>

       
      </div>

     
    );
  }
}
export default App;
