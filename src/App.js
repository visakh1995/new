import React,{useState} from 'react';
import './App.css';
import data from './data';
import List from './List';

function App() {
  const[people,setPeople] = useState(data);
  return (
  <main>
   <div className="container flex">
     <h2>{people.length} people registered today</h2>
     <button className="btn" onClick={() => setPeople([])}>clear</button>
     <List people ={people}/>

   </div>
   </main>

  );
}

export default App;
