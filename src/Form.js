import React from 'react'
import axios from 'axios'
import Navbar from './Component/navbar.Component';
import {withRouter} from 'react-router-dom';
class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            subject:[],
            topic:[],
            s_id: '',
            t_id: '',
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
        axios.get('http://localhost:5000/subject/')
        .then(response => {
            this.setState({
                subject: response.data,
            })
           
        })
        .catch(err=> console.log('Error :'+err))
    }

    componentDidUpdate()
    {
        axios.get('http://localhost:5000/topic/'+this.state.s_id)
        .then(response => {
            this.setState({
                topic: response.data,
            })
        })
        .catch(err=> console.log('Error :'+err))   
    }
    
    handleQuestion = (event)=>{
        this.setState({
            question: event.target.value
        })
    }

    handleOA = (event)=>{
        this.setState({
            oa: event.target.value
        })
    }

    handleOB = (event)=>{
        this.setState({
            ob: event.target.value
        })
    }

    handleOC = (event)=>{
        this.setState({
            oc: event.target.value
        })
    }

    handleOD = (event)=>{
        this.setState({
            od: event.target.value
        })
    }

    handleAnswer = (event)=>{
        this.setState({
            ans: event.target.value
        })
    }
    handleSubject = (e) => {
        this.setState({
            s_id: e.target.value
        })
    }

    handleTopic = (e)=> {
        this.setState({
            t_id: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const Question = {
            s_id: this.state.s_id,
            t_id: this.state.t_id,
            question: this.state.question,
            oa: this.state.oa,
            ob: this.state.ob,
            oc: this.state.oc,
            od: this.state.od,
            ans: this.state.ans
        }

        console.log(Question);
    }

    render()
    {
        return(
            
            <div className='container'>
                <Navbar />
                <br/>
            <form onSubmit={this.onSubmit}>
                <div className='container'>
                    <label>
                        <select onChange={this.handleSubject} value={this.state.s_id} className='browser-default custom-select'>
                             {this.state.subject.map(c => (
                                  <option value={c._id} key={c._id}> 
                                         {c.name}
                                   </option>
                                ))}
                        </select>
                    </label>
                </div>
                <br/>
                <div>
                  <select onChange={this.handleTopic} value={this.state.t_id} className='browser-default custom-select'>
                      {this.state.topic.map(c=> (
                          <option value={c._id} key={c._id}>
                              {c.topic}
                           </option>
                      ))}
                  </select>
                </div>

                <div className='form-group'>
                    <label>
                        Question : 
                        <input type = 'text' 
                                value = {this.state.question} 
                                className= 'form-control'
                                onChange={this.handleQuestion} 
                                style={{width:750,height:100}}
                                required/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        (A) 
                        <input type = 'text' 
                                value = {this.state.oa} 
                                className= 'form-control'
                                onChange={this.handleOA} 
                                style={{width:250}}
                                required/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        (B)  
                        <input type = 'text' 
                                value = {this.state.ob} 
                                className= 'form-control'
                                onChange={this.handleOB} 
                                style={{width:250}}
                                required/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        (C) 
                        <input type = 'text' 
                                value = {this.state.oc} 
                                className= 'form-control'
                                onChange={this.handleOC} 
                                style={{width:250}}
                                required/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        (D)  
                        <input type = 'text' 
                                value = {this.state.od} 
                                className= 'form-control'
                                onChange={this.handleOD} 
                                style={{width:250}}
                                required/>
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        Answer :  
                        <input type = 'text' 
                                value = {this.state.ans} 
                                className= 'form-control'
                                onChange={this.handleAnswer} 
                                required/>
                    </label>
                </div>
                <div className='form-group'>
                    <input type='submit' value="Create Question" className="btn btn-primary" />
                </div>
            </form>
            </div>
            
        )
    }
}
export default withRouter(Form);