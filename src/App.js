import React from 'react';
import AddItem from "./Additem";
import ItemCount from "./ItemCount";
import './App.css';
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  // every componant must have a render method
  render() {
    return (
      <div>
        <h1 id = "mainHeading">To Do List
        </h1>
        <h3>Things I need to do:</h3>
        <AddItem />
        <ItemCount count= {4} />
        <ul>
          <Item  id = "item1" text ="Go to the bank"/>
          <Item  id = "item2" text = "Do the shopping"/>
          <Item  id = "item3" text = "Gym class at 11am"/>
          <Item  id = "item4" text = "Hair appt 1pm"/>
          {/* PROP*/}

        </ul>
      </div>
    );
  }
}


export default App;
