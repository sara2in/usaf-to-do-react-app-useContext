import React, { useState }from 'react';
import ToDoList from './ToDoList'
import NewToDo from './NewToDo'
import AppContext from "./Context/AppContext";

  function App (){
    let [todos, settodos] = useState( [
      { name: 'laundry' },
      { name: 'buy groceries' },
      { name: 'mow lawn' }
    ] );
    let [currentItem, setCurrentItem] = useState({ name: '' });

  function handleChange(event) {
    setCurrentItem( {
      name: event.target.value
    } )
  }

  function handleSubmit(event) {
    settodos([currentItem, ...todos]);
    event.preventDefault();
  }

    return (
      <AppContext.Provider
        value={{
          handleChange,
          handleSubmit
        }}
      >
        <div className="App">
          <ToDoList todos={todos} />
          <NewToDo />
        </div>
      </AppContext.Provider>
    );
  }


export default App;
