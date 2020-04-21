import React from 'react'
import axios from 'axios'
import Navbar from './Component/navbar.Component'


export default class AddQuestion extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            subject:[],
            topic:[],
            s_id: '',
            t_id: '',   
            question: '',
            oa: '',
            ob: '',
            oc: '',
            od: '',
            ans: ''
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:5000/subject/')
        .then(response => {
            this.setState({
                subject: response.data,
                s_id: response.data[0]._id
            })
            console.log(this.state.subject)
        })
        .catch(err=> console.log(err))
    }
    componentDidUpdate()
    {
        axios.get('http://localhost:5000/topic/'+ this.state.s_id)
        .then(response => {this.setState({
            topic:response.data
        })
       
    })
        .catch(err=> console.log(err))
    }


    handleSubject =(e) => {
        this.setState({
            s_id: e.target.value
        })
    } 

    handleTopic = (e)=> {
        this.setState({
            t_id: e.target.value
        })
    }

    handleAnswer = (e) => {
        this.setState({
            ans: e.target.value
        })
    }

    handleQuestion = (e)=> {
        this.setState({
            question: e.target.value
        })
    }
    handleOA = e=> {
        this.setState({
            oa: e.target.value
        })
    }

    handleOB = e=> {
        this.setState({
            ob: e.target.value
        })
    }

    handleOC = e=> {
        this.setState({
            oc: e.target.value
        })
    }

    handleOD = e=> {
        this.setState({
            od: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
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

        axios.post('http://localhost:5000/question/add',newQ)
        .then(response=> console.log(response.data))

        this.setState({
            subject:[],
            topic:[],
            s_id: '',
            t_id: '',
            question: '',
            oa: '',
            ob: '',
            oc: '',
            od: '',
            ans: ''
        })
        window.location='/home'
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
                 Course:
                    <select onChange={this.handleSubject} value={this.state.s_id} className='browser-default custom-select'>
                         
                         <option value='Course' key='Course'> Select Course</option>
                         {this.state.subject.map(c => (
                              <option value={c._id} key={c._id}> 
                                    {c.name}
                               </option>
                            ))}
                    </select>
                
            </div>
            <div className='form-group'>
                 Topic:
                <select onChange={this.handleTopic} value={this.state.t_id} className='browser-default custom-select'>
                    
                    <option key='Topic' value='Topic'>Select Topic</option>
                    {this.state.topic.map(c=> (
                        <option value = {c._id} key = {c._id}>
                            {c.topic}
                        </option>
                    ))}
                </select>
            </div>

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
                    <select onChange={this.handleAnswer} className='browser-default custom-select'>
                        <option key ='A' value={this.state.oa}>A. {this.state.oa} </option>
                        <option key ='B' value={this.state.ob}>B. {this.state.ob} </option>
                        <option key ='C' value={this.state.oc}>C. {this.state.oc} </option>
                        <option key= 'D' value={this.state.od}>D. {this.state.od} </option>
                    </select>
                
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