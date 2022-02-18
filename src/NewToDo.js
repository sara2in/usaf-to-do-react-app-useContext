import React, { useContext }from 'react';
import AppContext from "./Context/AppContext";


function NewToDo() {
  const { handleSubmit, handleChange } = useContext(AppContext);
  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <label>
                New Item:
                <input type="text" name="name" onChange={ handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
}

export default NewToDo;
