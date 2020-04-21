import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import QuestionList from "./Component/QuestionList";
import AddQuestion from './AddQuestion'
import EditQuestion from './Component/editQuestion'
import AddSubject from "./Component/addSubject";
import AddTopic from './Component/addTopic'
import Login from './Component/Login'
import Register from './Component/register'
class App extends React.Component
{
  render()
  {
    return(
    <div>
      
      <Router>
      <br/>
        <div className = 'container'>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/signup' component={Register}/>
            <Route path='/home' component={QuestionList}/>
          <Route path='/add' component={AddQuestion} />
          <Route path='/edit' component={EditQuestion}/>
          <Route path='/addSubject' component={AddSubject}/>
          <Route path='/addTopic' component={AddTopic}/>
          </Switch>
        </div>
      </Router>
    </div>
    )
  }

}
export default App;
