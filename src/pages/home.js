import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            // todos: [
            //     {
            //         "userId": 1,
            //         "id": 1,
            //         "title": "delectus aut autem",
            //         "completed": false,
            //         "archived": false,
            //         "dueDate": "2015-05-22T14:56:29.000Z"
            //     },
            //     {
            //         "userId": 1,
            //         "id": 2,
            //         "title": "delectus aut autem",
            //         "completed": false,
            //         "archived": false,
            //         "dueDate": "2015-05-22T14:56:29.000Z"
            //     },
            //     {
            //         "userId": 1,
            //         "id": 3,
            //         "title": "delectus aut autem",
            //         "completed": false,
            //         "archived": false,
            //         "dueDate": "2015-05-22T14:56:29.000Z"
            //     }
            // ]
            modal: false,
            id: '',
            todoId: '', 
            title: '',
            dueDate: new Date(),
            todos: []
        };
    }

    componentDidMount(){
        this.getTodos();
    }
    getTodos() {
          axios.get('https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos')
          .then(response => {
            this.setState(
                (state, props) => {
                  return { todos: response.data };
            });
          })
          .catch(error => {
            console.log(error);
          })
    }
    getTodo(id, todoId, title, dueDate){
        console.log(id, todoId, title, dueDate)
        this.setState(
            (state, props) => {
              return { 
                  id: id,
                  todoId: todoId,
                  title: title,
                  dueDate: dueDate,
            };
        });
    }
    onComplete(id, todoId, userId, title, archived, dueDate){
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`)
        .then(response => {
            let newArray = Object.assign([], this.state.todos); //creating copy of object
            newArray[id]=({
                id:`${todoId}`,
                userId: userId,
                title: title,
                completed: true,
                archived: archived,
                dueDate:dueDate,
            }); 
            // this.setState({ todos: newArray });
            this.setState(
                (state, props) => {
                  return { todos: newArray };
            });
            // this.setState({
            //     todos: response.newArray
            // })
            
        //   this.setState({ todos: response.data });
        console.log(this.state.todos)
        })
        .catch(error => {
        console.log(error);
        })
    }
    onDelete(id, todoId){
        axios.delete(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`)
        .then(response => {
            // let newArray = Object.assign([], this.state.todos); //creating copy of object
            // newArray[id]=({
            //     id:`${todoId}`,
            //     userId: userId,
            //     title: title,
            //     completed: true,
            //     archived: archived,
            //     dueDate:dueDate,
            // }); 
            // this.setState({ todos: newArray });
            // this.setState(
            //     (state, props) => {
            //       return { todos: newArray };
            // });
            const todos = this.state.todos.filter(todo => todo.id !== todoId)
            this.setState(
                (state, props) => {
                  return { todos };
            });
            // this.setState({
            //     todos: response.newArray
            // })
            
        //   this.setState({ todos: response.data });
        })
        .catch(error => {
        console.log(error);
        })
    }
    onEdit(){

    }
    onArchive(id, todoId, userId, title, completed, dueDate){
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`)
        .then(response => {
            let newArray = Object.assign([], this.state.todos); //creating copy of object
            newArray[id]=({
                id:`${todoId}`,
                userId: userId,
                title: title,
                completed: completed,
                archived: true,
                dueDate:dueDate,
            }); 
            // this.setState({ todos: newArray });
            this.setState(
                (state, props) => {
                  return { todos: newArray };
            });
            // this.setState({
            //     todos: response.newArray
            // })
            
        //   this.setState({ todos: response.data });
        console.log(this.state.todos)
        })
        .catch(error => {
        console.log(error);
        })
    }
    onUnarchive(id, todoId, userId, title, completed, dueDate){
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`)
        .then(response => {
            let newArray = Object.assign([], this.state.todos); //creating copy of object
            newArray[id]=({
                id:`${todoId}`,
                userId: userId,
                title: title,
                completed: completed,
                archived: false,
                dueDate:dueDate,
            }); 
            // this.setState({ todos: newArray });
            this.setState(
                (state, props) => {
                  return { todos: newArray };
            });
            // this.setState({
            //     todos: response.newArray
            // })
            
        //   this.setState({ todos: response.data });
        console.log(this.state.todos)
        })
        .catch(error => {
        console.log(error);
        })
    }
    onShowModal(){
        this.setState(
            (state, props) => {
              return { modal: !this.state.modal };
        });
    }
    render() {
        return (
            <div className={'row'}>
                    <div class="col-md-4">
                        <h3>Todo's</h3>
                        <div class="card mb-4 shadow-sm border-info">
                            <ul class="list-group">
                                {this.state.todos.map((todo, id) => {
                                    const newDate = new Date(todo.dueDate).toISOString().split('T')[0];
                                   
                                    if(todo.completed === false && todo.archived === false){
                                        return(
                                            <li class="list-group-item">
                                                <div class="row">
                                                    <div class="col col-lg-1">
                                                        <input onClick={() => 
                                                            this.onComplete(id, todo.id, todo.userId, todo.title, todo.archived, todo.dueDate)} type="checkbox" name="complete"/>
                                                    </div>
                                                    <div class="col-lg-8 todo-text">
                                                    <p>{todo.title} <span class="badge badge-secondary">{newDate}</span></p>
                                                    </div>
                                                    <div class="col-lg-3 todo-edit-btn">
                                                        <button type="button" class="btn btn-primary btn-edit" onClick={() => 
                                                            {
                                                                this.onShowModal()
                                                                this.getTodo(id, todo.id, todo.title, todo.dueDate)
                                                            }
                                                        }  data-toggle="modal" data-target="#exampleModal"><i class="fas fa-pen"></i></button>
                                                        <button onClick={() => this.onArchive(id, todo.id, todo.userId, todo.title, todo.completed, todo.dueDate)} type="button" class="btn btn-primary btn-archive"><i class="fas fa-archive"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                })}

                            </ul>
                        </div>
                        </div>

                        <div class="col-md-4">
                    <h3>Done</h3>
                    <div class="card mb-4 shadow-sm border-success done">
                        <ul class="list-group">
                            {this.state.todos.map((todo, id) => {
                                if(todo.completed === true && todo.archived === false){
                                    return(
                                        <li class="list-group-item">
                                            <div class="row">
                                                <div class="col col-lg-1">
                                                <input type="checkbox" name="complete" checked/>
                                                </div>
                                                <div class="col-lg-8 todo-text">
                                                <p>{todo.title} <span class="badge badge-secondary">Time</span></p>
                                                </div>
                                                <div class="col-lg-3 todo-edit-btn">
                                                <button type="button" class="btn btn-primary btn-edit"><i class="fas fa-pen"></i></button>
                                                <button onClick={() => this.onArchive(id, todo.id, todo.userId, todo.title, todo.completed, todo.dueDate)} type="button" class="btn btn-primary btn-archive"><i class="fas fa-archive"></i></button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    </div>

                        <div class="col-md-4">
                            <h3>Archive</h3>
                            <div class="card mb-4 shadow-sm border-danger archive">
                                <ul class="list-group">
                                {this.state.todos.map((todo, id) => {
                                    if(todo.archived === true){
                                        return(
                                            <li class="list-group-item">
                                                <div class="row">
                                                    <div class="col col-lg-1">
                                                    <button onClick={() => this.onUnarchive(id, todo.id, todo.userId, todo.title, todo.completed, todo.dueDate)} type="button" class="btn btn-primary btn-unarchive"><i class="fas fa-box-open"></i></button>
                                                    </div>
                                                    <div class="col-lg-8 todo-text">
                                                    <p>{todo.title} <span class="badge badge-secondary">Time</span></p>
                                                    </div>
                                                    <div class="col-lg-3 todo-edit-btn">
                                                    <button type="button" class="btn btn-primary btn-edit" disabled><i class="fas fa-pen"></i></button>
                                                    <button type="button" onClick={() => this.onDelete(id, todo.id)}  class="btn btn-delete-forever"><i class="fas fa-trash-alt"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    } 
                                })}
                                </ul>
                            </div>
                    </div>
                    <div className={`modal fade ${this.state.modal ? 'show' : 'hide'}`} id="exampleModal" style={{display: `${this.state.modal ? 'block' : ''}`, paddingRight:  `${this.state.modal ? '17px' : ''}`}}  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <label>Title</label>
                            <input className={'form-control'} type="text" name="title" value={`${this.state.title}`}/>
                            <label>Due Date</label>
                            <input className={'form-control'} type="date" name="Due Date" value={new Date().toISOString().slice(0,10)}/>
                        </div>
                        <div class="modal-footer">
                            <button onClick={this.onShowModal.bind(this)} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div> 
            </div>
        );
    }
}

export default Home;