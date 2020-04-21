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
            logged: false
        }
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
            password: this.state.password
        }

        axios.get('http://localhost:5000/user/')
        .then(response=> {
            response.data.map(man => {
                if(newMan.username===man.username && newMan.password===man.password)
                {
                    this.setState({ logged: true})
                    let {history} = this.props;
                    history.push('/home')  
                }})

        })
        .catch(err=> console.log(err))

        this.setState({
            username: '',
            password: '',
            logged: false
        })
    }

    render()
    {
        return(
            <div>
            <div>
                <h2 style={{fontFamily: 'Giorgio'}}> Welcome to Question-Bank</h2>
            </div>
            <div style={{border:'1px solid grey',borderRadius: 15,padding:25,height:300,width:350}}>
                <h2 style={{fontWeight: "bold",fontFamily:'Helvetica'}}> LOGIN </h2>
                <div className='Container' style={{display:'flex'}}>
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
                            value='LOGIN' 
                            className='btn btn-primary'/>
                            </div>
                            <div className='form-group'>
                                <a href='/signup'> New to this ? </a>
                            </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(Login)