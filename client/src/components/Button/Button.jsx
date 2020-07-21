import React from "react";
import './style.css';

function Button(props) {
  return (
    <div className="buttons">
      <button type="button" className="btn btn-outline-primary" onClick={()=>props.clicked(65, 71)}>A - G</button>
      <button type="button" className="btn btn-outline-primary"  onClick={()=>props.clicked(72, 77)}>H- M</button>
      <button type="button" className="btn btn-outline-primary"  onClick={()=>props.clicked(78, 90)}>N - Z</button>
    </div>

  )
}

export default Button