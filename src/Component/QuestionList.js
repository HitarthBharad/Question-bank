import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar.Component';


const Addit = props => (
  <tr>
    <td>{props.quest.question}</td>
    <td>{props.quest.oa}</td>
    <td>{props.quest.ob}</td>
    <td>{props.quest.oc}</td>
    <td>{props.quest.od}</td>
    <td>{props.quest.ans}</td>
    <td> <a href={'/edit/' + props.quest._id}>Edit</a>/<a href='#' onClick = {() => props.deleteQuestion(props.quest._id)} style={{color:'red',fontWeight:'bold'}}>Delete</a></td>
  </tr>
)

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.deleteQuestion = this.deleteQuestion.bind(this)
    this.state = {question: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/question/')
      .then(response => {
        this.setState({ question: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteQuestion(id)  {
      axios.delete('http://localhost:5000/question/'+id)
      .then(response => console.log(response.data))

      this.setState({
        question: this.state.question.filter(el => el._id !== id)
      })
  }

  questionList = () => (
     this.state.question.map(c => (
        <Addit quest={c}  key={c._id} deleteQuestion={this.deleteQuestion}/>
     ))
  )

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <h3>Logged Questions</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Question</th>
              <th>(A)</th>
              <th>(B)</th>
              <th>(C)</th>
              <th>(D)</th>
              <th>Ans</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            { this.questionList() }
          </tbody>
        </table>
      </div>
    )
  }
}
export default withRouter(QuestionList)