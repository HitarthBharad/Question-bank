import React from 'react'
import axios from 'axios'
import Navbar from './navbar.Component'

export default class AddTopic extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            subject: [],
            sid: '',
            topic: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/subject/')
        .then(response => {
            this.setState({
                subject: response.data
            })
        })
        .catch(err=> console.log(err))
    }

    handleSubject = (e) => {
        this.setState({
            sid: e.target.value
        })
    } 

    handleTopic = (e)=> {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const Chapter = {
            s_id: this.state.sid,
            topic: this.state.topic 
        }

        axios.post('http://localhost:5000/topic/add',Chapter)
        .then(response => console.log(response.data))

        this.setState({
            subject: [],
            sid: '',
            topic: ''
        })
        window.location = '/home'
    }

    render()
    {
        return(
            <div className='Container'>
                <Navbar />
                <h2> Add Topic </h2>
                <form onSubmit = {this.handleSubmit}>
                    <div className='from-group'>
                        <select value={this.state.sid} onChange={this.handleSubject} className='browser-default custom-select'>
                           
                            <option key='Subject' value='Subject'> Select Subject</option>
                            {this.state.subject.map(c=> (
                                <option key={c._id} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <div className='from-group'>
                    <input type = 'text' 
                            value = {this.state.topic} 
                            className= 'form-control'
                            onChange={this.handleTopic} 
                            required/>
                    </div>
                    <div className='from-group'>
                        <input type='submit' value='Submit' className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}