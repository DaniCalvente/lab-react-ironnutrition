import React from 'react';


function FoodBox(props) {
    const {name, image, calories} = props.eachPlateProps
  return (
    <div>
      <img src={image} width="80px"/>
      <p>
        <strong>{name}</strong> <br />
        <small>{calories}</small>
      </p>
      <button>+</button>
    </div>
  );
}

export default FoodBox;
