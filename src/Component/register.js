import React from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";

class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state= {
            username: '',
            password: '',
            logged: false,
            logo: []
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/user/')
        .then(response=> {
            this.setState({
                logo: response.data
            })
            console.log(this.state.logo)
        })
        .catch(err=> console.log(err))
    }

    handleUser =(e)=> {
        this.setState({
            username: e.target.value
        })
    }
    handlePassWord = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const newMan = {
            username: this.state.username,
            password: this.state.password,
            logged: false,
        }
        
        axios.post('http://localhost:5000/user/add',newMan)
        .then(response=> console.log(response.data))

        window.location='/'
        this.setState({
            username: '',
            password: '',
            logged: false
        })
    }

    render()
    {
        return(
            <div style={{border:'1px solid grey',borderRadius: 15,padding:25,height:300,width:350}}>
                <h2 style={{fontWeight: "bold",fontFamily:'Helvetica'}}> Register </h2>
                <div className='Container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                        <input 
                            type='text' 
                            value={this.state.username} 
                            onChange={this.handleUser}
                            className='form-control' 
                            style={{width:250}}
                            placeholder='USERNAME' 
                            required />
                        </div>
                        <div className ='form-group'>
                        <input 
                            type='password' 
                            value={this.state.password} 
                            onChange={this.handlePassWord}
                            className='form-control' 
                            style={{width:250}}
                            placeholder='PASSWORD' 
                            required />
                        </div>
                        <div className='form-group'>
                        <input 
                            type='submit' 
                            value='SIGN IN' 
                            className='btn btn-primary'/>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)