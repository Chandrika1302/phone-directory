import Header from './Header';
import './App.css';
function App() {
  return (
    <div>
      <Header/>
       <button className="add-btn">Add</button>
       <div className="user-details">
          <span>Name</span>
          <span>Phone</span>
       </div>
    </div>
  );
}

export default App;
