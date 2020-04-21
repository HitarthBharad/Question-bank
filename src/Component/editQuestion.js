import React from 'react'
import axios from 'axios'
import Navbar from './navbar.Component'
export default class EditQuestion extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            qid: '',
            t_id: '',
            s_id: '',
            question: '',
            oa: '',
            ob: '',
            oc: '',
            od: '',
            ans: '',
        }
    }
    componentDidMount()
    {
        console.log(this.props)
        var path = this.props.location.pathname
        var id =  path.substring(6)

        this.setState({
            qid: id
        })

        axios.get('http://localhost:5000/question/'+id)
        .then(response => {
            this.setState({
                s_id: response.data.s_id,
                t_id: response.data.t_id,
                question: response.data.question,
                oa: response.data.oa,
                ob: response.data.ob,
                oc: response.data.oc,
                od: response.data.od,
                ans: response.data.ans
            })
        })
    }

    handleQuestion =(e) => {
        this.setState({
            question: e.target.value
        })
    }

    handleOA = e => {
        this.setState({
            oa: e.target.value
        })
    }

    handleOB = e => {
        this.setState({
            ob: e.target.value
        })
    }
    handleOC =e => {
        this.setState({
            oc: e.target.value
        })
    }
    handleOD = e => {
        this.setState({
            od : e.target.value
        })
    }
    handleAnswer =e=> {
        this.setState({
            ans: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newQ = {
            s_id: this.state.s_id,
            t_id: this.state.t_id,
            question: this.state.question,
            oa: this.state.oa,
            ob: this.state.ob,
            oc: this.state.oc,
            od: this.state.od,
            ans: this.state.ans
        }
        console.log(newQ)
        axios.post('http://localhost:5000/question/edit/'+this.state.qid,newQ)
        .then(response => console.log(response.data))

        window.location = '/home'

    }

    render()
    {
        return(
            <div className='container'>
            <Navbar />
            <br/>
            <div className='form'>
        <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
                
                    Question : 
                    <input type = 'text' 
                            value = {this.state.question} 
                            className= 'form-control'
                            onChange={this.handleQuestion} 
                            required/>
                
            </div>
            <div className='form-group'>
                
                    (A) 
                    <input type = 'text' 
                            value = {this.state.oa} 
                            className= 'form-control'
                            onChange={this.handleOA} 
                           
                            required/>
                
            </div>
            <div className='form-group'>
                
                    (B)  
                    <input type = 'text' 
                            value = {this.state.ob} 
                            className= 'form-control'
                            onChange={this.handleOB} 
                            
                            required/>
                
            </div>
            <div className='form-group'>
                
                    (C) 
                    <input type = 'text' 
                            value = {this.state.oc} 
                            className= 'form-control'
                            onChange={this.handleOC} 
                            
                            required/>
                
            </div>
            <div className='form-group'>
                
                    (D)  
                    <input type = 'text' 
                            value = {this.state.od} 
                            className= 'form-control'
                            onChange={this.handleOD} 
                            required/>
                
            </div>
            <div className='form-group'>
                
                    Answer :  
                    <input type = 'text' 
                            value = {this.state.ans} 
                            className= 'form-control'
                            onChange={this.handleAnswer} 
                            required/>
                
            </div>
            <div className='form-group'>
                <input type='submit' value="Create Question" className="btn btn-primary" />
            </div>
        </form>
        </div>
        </div>
        )
    }
}