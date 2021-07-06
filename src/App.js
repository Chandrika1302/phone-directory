import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';


// let subscribers = [
    //   {
    //     id: 1,
    //     name: "Shilpa Bhat",
    //     phone: "8888888888"
    //   },
    //   {
    //     id: 2,
    //     name: "Srishti Gupta",
    //     phone: "9999999999"
    //   }
    // ];
class App extends Component {
  constructor(){
    super();
    this.state={
      subscribersListToShow: []
    }

  }
  
  

  render() {

    return (
      <div>
        <Header heading="phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.state.subscribersListToShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,'Delete Clicked')}> Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;