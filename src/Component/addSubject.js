import React from 'react'
import axios from 'axios'
import Navbar from './navbar.Component'
export default class AddSubject extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state= {
            name: ''
        }
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const Sub = {
            name: this.state.name
        }
        axios.post('http://localhost:5000/subject/add',Sub)
        .then(response=> console.log(response))

        this.setState({
            name: '',
        })
        window.location ='/home'
    }
    render()
    {
        return(
            <div className='Container'>
                <Navbar />
                <h2> Add Subject</h2>
                <form onSubmit={this.handleSubmit}>
                <input type = 'text' 
                            value = {this.state.name} 
                            className= 'form-control'
                            onChange={this.handleName} 
                            required/>
                <div className='form-group'>
                     <input type='submit' value="Add Subject" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }
}
