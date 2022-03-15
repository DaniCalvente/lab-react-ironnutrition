import {useState} from "react"
import React from 'react';




function AddFood() {
  return (
    <div>
    <form >

          <label htmlFor="image">Image:</label>
          <input type="file" name='image'/>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name"/>

          <label htmlFor="calories">Calories:</label>
          <input type="number" name="calories"/>
          <br />

          <button>Submit</button>

        </form>

    

    </div>
  )
}

export default AddFood