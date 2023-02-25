//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
const date = new Date();
const ct = date.getHours();
//console.log(ct);

let content;

if (ct < 12) {
  content = "Good Morning";
} else if (ct < 18 && ct > 12) {
  content = "Good Evening";
} else {
  content = "Good Night";
}

ReactDOM.render(
<h1 className="heading">{content}</h1>
  ,
   document.getElementById("root"));
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
