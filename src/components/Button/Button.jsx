import React from "react";
import './style.css'
function Button() {
  return (
    <div className="buttons">
      <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#lastName">A - G</button>
      <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#lastName">H- M</button>
      <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#lastName">N - Z</button>
    </div>

  )
}

export default Button



{/* function CardBtn(props) {
    return (
      <button className={`card-btn ${props["data-value"]}`} {...props} />
    );
  }  */}