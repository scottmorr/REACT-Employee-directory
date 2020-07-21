import React from 'react'
import Moment from "moment";
import './style.css'



function Table(props) {
    return (
        <table className="table is-fullwidth">
            <thead className="thead-dark">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((item, i) => (
                    <tr key={i+'-card'}>
                        <td><img src={item.image} alt={item.firstName} /> </td>
                        <td>{item.firstName} {item.lastName}</td>
                        <td>{item.phone}</td>
                        <td>{Moment(item.dob).format("MMMM D, YYYY")}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table