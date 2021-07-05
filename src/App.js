import React, {Component} from 'react';
import Header from './Header';
import './App.css';
class App extends Component{
  render(){
    let subscribers=[
      {
        id:1,
        name:"Chandrika",
        phone:"7777777777"
      },
      {
        id:2,
        name:"Sumeetha",
        phone:"6666666666"
      }
    ];
    return (
      <div>
        <Header/>
         <button className="add-btn">Add</button>
         <div className="user-headingDetails">
            <span>NAME</span>
            <span>PHONE</span>
         </div>
         {
           subscribers.map(sub =>{
             return  <div className="user-details" key={sub.id}>
             <span>{sub.name}</span>
             <span>{sub.phone}</span>
          </div> 

           })
         }
      </div>
    );
  }
}
export default App;
