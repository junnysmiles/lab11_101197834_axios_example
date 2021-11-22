import React, { Component } from 'react'
import axios from 'axios'
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap'

export default class PersonList extends Component {
    
    // Define state default values
    constructor(props) {
        super(props)
    
        this.state = {
             persons: []
        }
    }
    
    //Component Lifecycle Callback
    componentDidMount() {
        this.getPersons()
    }
    
    getPersons = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <div>
                {
                    this.state.persons.map(p => (
                        <div>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{p.name.title} {p.name.first} {p.name.last}</Accordion.Header>
                                    <Accordion.Body>
                                        <h5>Username: {p.login.username}</h5>
                                        <h5>Gender: {p.gender}</h5>
                                        <h5>DoB and Age: {p.dob.date}, {p.dob.age}</h5>
                                        <h5>Email: {p.email}</h5>
                                        <h5>Phone: {p.phone}, {p.cell}</h5>
                                        <h5>Address: {p.location.street.number} {p.location.street.name}, {p.location.city}, {p.location.state}, {p.location.postcode}, {p.location.country}</h5>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    ))
                }
            </div>
        )
    }
}
