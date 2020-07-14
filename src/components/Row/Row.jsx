import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'

function Row(props) {
    return <div className={`row${props.fluid ? "-fluid" : "row"}`} {...props} />;
 
 
  }



export default Row