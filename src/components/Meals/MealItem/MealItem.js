import React from "react";
import classes from "./MealItem.module.css";

function MealItem(props) {

    const price = props.price.toFixed(2);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          <p>{props.description}</p>
        </div>
        <div className={classes.price}>
          <p>${price}</p>
        </div>
      </div>
      <div>
       

      </div>
    </li>
  );
}

export default MealItem;
