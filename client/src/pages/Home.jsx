import React, { Component } from 'react';
import API from "../utils/API";
import Table from "../components/Table";
import Buttons from '../components/Button';

class Home extends Component {
    state = {
        filtered: [],
        employees: []
    };

    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = async () => {
        try {
            const res = await API.searchRandomUsers()
            let employees = res.data.results;

            employees = employees.map(emp => ({
                id: emp.id.value,
                image: emp.picture.thumbnail,
                firstName: emp.name.first,
                lastName: emp.name.last,
                phone: emp.phone,
                dob: emp.dob.date
            }))

            this.setState({ employees, filtered: employees })
        } catch (error) {
            console.log(error)
        }
    }

    clicked = (lo, hi) => {
        this.setState({
            filtered: this.state.employees.filter(e => {
                var code = e.lastName.charCodeAt(0)

                return code >= lo && code <= hi
            })
        })
    }


    render() {
        return (
            <div>
                <h1 className="text-center dark">Find Employees</h1>
                <Buttons clicked={this.clicked} />
                <Table employees={this.state.filtered} />
            </div >
        );
    }
};
export default Home;
