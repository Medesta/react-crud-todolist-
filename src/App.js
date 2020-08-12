import React, { Component } from 'react';
import './App.css';
import Form from './form/form'
import Button from './Button/Button';
import Card from './card/Card'

class App extends Component {
  state = {
    Name: '',
    Date: new window.Date(),
    description: '',
    todoList: [],
    editFlag: false,
    curEdit: ''


  }
  submitHandler = (event) => {
    event.preventDefault();
    let { Name, description, todoList } = this.state;
    if (!Name || !description) {
      alert("Please fill all feilds");
      return;
    }
    const duplicateTodo = [...todoList];
    duplicateTodo.push({
      Name: Name,
      Date: new window.Date(),
      description: description
    });
    this.setState({
      todoList: duplicateTodo,
      Name: '',
      Date: new window.Date(),
      description: '',
    });

  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim().replace(/[\n\r]/g, ' ')
    }, () => { console.log(this.state) })
  }
  editHandler = (e) => {
    this.setState({
      editFlag: true,
      curEdit: e,
      Name: this.state.todoList[e].Name,
      Date: this.state.todoList[e].Date,
      description: this.state.todoList[e].description
    })
  }
  updateHandler = () => {
    let { Name, description, todoList } = this.state;
    const duplicateTodo = [...todoList];

    if (!Name || !description) {
      alert("Please fill all feilds");
      return;
    }
    duplicateTodo[this.state.curEdit] = {
      Name: Name,
      Date: new window.Date(),
      description: description
    }

    this.setState({
      todoList: duplicateTodo,
      editFlag: false,
      curEdit: '',
      Name :'',
      Date:new window.Date(),
      description:''
    })
  }
  delHandler=(e) =>{
    // this.state.todoList.splice(e,1);
    this.setState(prevState=>({
      todoList:prevState.todoList.filter((item,index)=>index!=e)
    }))
  }


  render() {
    let card = (
      <div className="tasks">
        {this.state.todoList.map((todo, index) => (
          <Card
            key={index}
            id={index}
            onClick={() => this.editHandler(index)}
            onDel={()=> this.delHandler(index)}
            Name={todo.Name}
            Date={todo.Date}
            Des={todo.description}
          />
        ))}
      </div>
    )


    return (
      <div className="App">
        <h1>
          Todo List
    </h1>
        <div className="input-section">
          <Form
            onChange={this.onChangeHandler}
            Name={this.state.Name}
            date={this.state.Date}
            des={this.state.description}
          />

          {!this.state.editFlag ?

            <Button onClick={this.submitHandler} name="Submit" />

            :
            <Button onClick={this.updateHandler} name="Update" />
          }          </div>
        {card}
      </div>

    )
  }
}

export default App;
