import { useState } from "react";
import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from "./components/AddFood.jsx"
import Search from "./components/Search";

function App() {
  const [plates, setPlates] = useState(foods);  

  return (

   
    
    <div>
     {plates.map((eachPlate, index) => {
      return (<FoodBox eachPlateProps={eachPlate} key={index + eachPlate.name}/>)
    })} 


    <AddFood/>


    </div>

    



    
 
  );
}

export default App;
