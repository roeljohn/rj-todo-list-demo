import React, { Component } from 'react';
import { settings } from './../settings';
import DateBadge from './../components/dateBadge'
import Datepicker from 'react-datepicker'
import Moment from 'react-moment';
import moment from 'moment'
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
            dropdown: false,
            id: '',
            todoId: '', 
            title: '',
            userId: '',
            completed: false,
            archived: false,
            dueDate: moment(),
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

    getTodo(id, todoId, userId, title, archived, completed, dueDate){
        debugger;
        this.setState(
            (state, props) => {
              return {
                arrId: id, 
                id: todoId,
                userId: userId,
                title: title,
                completed: completed,
                archived: archived,
                dueDate:dueDate,
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
                  return { 
                      todos: newArray
                };
            });
            // this.setState({
            //     todos: response.newArray
            // })
            
        //   this.setState({ todos: response.data });
        let newNotification = Object.assign([], settings.notification);
        newNotification.push({
            id:`${todoId}`,
            userId: userId,
            title: title,
            completed: true,
            archived: archived,
            dueDate:dueDate,
        }); 
        settings.notification = newNotification;
        console.log(settings.notification.length)
        })
        .catch(error => {
        console.log(error);
        })
    }
    inComplete(id, todoId, userId, title, archived, dueDate){
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`)
        .then(response => {
            let newArray = Object.assign([], this.state.todos); //creating copy of object
            newArray[id]=({
                id:`${todoId}`,
                userId: userId,
                title: title,
                completed: false,
                archived: archived,
                dueDate:dueDate,
            }); 

            // this.setState({ todos: newArray });
            this.setState(
                (state, props) => {
                  return { 
                      todos: newArray
                };
            });
            // this.setState({
            //     todos: response.newArray
            // })
            
        //   this.setState({ todos: response.data });
        let newNotification = Object.assign([], settings.notification);
        newNotification.push({
            id:`${todoId}`,
            userId: userId,
            title: title,
            completed: true,
            archived: archived,
            dueDate:dueDate,
        }); 
        settings.notification = newNotification;
        console.log(settings.notification.length)
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
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${this.state.id}`)
        .then(response => {
            let newArray = Object.assign([], this.state.todos); //creating copy of object
            newArray[this.state.arrId]=({
                id:`${this.state.id}`,
                userId: this.state.userId,
                title: this.state.title,
                completed: this.state.completed,
                archived: this.state.archived,
                dueDate: this.state.dueDate,
            }); 
            // this.setState({ todos: newArray });
            this.setState(
                (state, props) => {
                  return { todos: newArray };
            });
            {console.log(this.state.todos)}
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
    onChangeTitle(e){
        // this.setState(
        //     (state, props) => {
        //       return { title: e.target.value };
        // });
        this.setState(({
            title: e.target.value
        }));  
    }
    onChangeDate(date){
        this.setState(
            (state, props) => {
              return { dueDate: date };
        });
    }
    render() {
        return (
            <div className={'row todo-page'}>
                    <div class="col-md-4">
                        <h3>Todo's </h3>
                        <div class="card mb-4 shadow-sm border-info">
                            <ul class="list-group">
                                {this.state.todos.map((todo, id) => {
                                    const currentDate = moment(todo.dueDate).format('MMMM DD YYYY, h:mm:ss a');
                                   
                                    if(todo.completed === false && todo.archived === false){
                                        return(
                                            <li class="list-group-item">
                                                <div class="row">
                                                    <div class="col col-lg-1">
                                                        <input onClick={() => 
                                                            this.onComplete(id, todo.id, todo.userId, todo.title, todo.archived, todo.dueDate)} type="checkbox" name="complete"/>
                                                    </div>
                                                    <div class="col-lg-8 todo-text">
                                                    <p>{todo.title} <DateBadge currentDate={currentDate} startDate={todo.startDate} endDate={todo.dueDate}/></p>
                                                    </div>
                                                    <div class="col-lg-3 todo-edit-btn">
                                                        <button type="button" class="btn btn-primary btn-edit" onClick={() => 
                                                            {
                                                                this.onShowModal()
                                                                this.getTodo(id, todo.id, todo.userId, todo.title, todo.archived, todo.completed, currentDate)
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
                                const currentDate = new Date(todo.dueDate).toString()
                                if(todo.completed === true && todo.archived === false){
                                    return(
                                        <li class="list-group-item">
                                            <div class="row">
                                                <div class="col col-lg-1">
                                                <input onClick={() => 
                                                            this.inComplete(id, todo.id, todo.userId, todo.title, todo.archived, todo.dueDate)} type="checkbox" name="incomplete" defaultChecked={true}/>
                                                </div>
                                                <div class="col-lg-8 todo-text">
                                                <p>{todo.title} <DateBadge currentDate={currentDate} startDate={todo.startDate} endDate={todo.dueDate}/></p>
                                                </div>
                                                <div class="col-lg-3 todo-edit-btn">
                                                <button type="button" class="btn btn-primary btn-edit" onClick={() => 
                                                            {
                                                                this.onShowModal()
                                                                this.getTodo(id, todo.id, todo.userId, todo.title, todo.archived, todo.completed, currentDate)
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
                            <h3>Archive</h3>
                            <div class="card mb-4 shadow-sm border-danger archive">
                                <ul class="list-group">
                                {this.state.todos.map((todo, id) => {
                                    const currentDate = new Date(todo.dueDate).toString()
                                    if(todo.archived === true){
                                        return(
                                            <li class="list-group-item">
                                                <div class="row">
                                                    <div class="col col-lg-1">
                                                    <button onClick={() => this.onUnarchive(id, todo.id, todo.userId, todo.title, todo.completed, todo.dueDate)} type="button" class="btn btn-primary btn-unarchive"><i class="fas fa-box-open"></i></button>
                                                    </div>
                                                    <div class="col-lg-8 todo-text">
                                                    <p>{todo.title} <DateBadge currentDate={currentDate} startDate={todo.startDate} endDate={todo.dueDate}/></p>
                                                    </div>
                                                    <div class="col-lg-3 todo-edit-btn">
                                                    <button type="button" class="btn btn-primary btn-edit" onClick={() => 
                                                            {
                                                                this.onShowModal()
                                                                this.getTodo(id, todo.id, todo.userId, todo.title, todo.archived, todo.completed, currentDate)
                                                            }
                                                        }  data-toggle="modal" data-target="#exampleModal" disabled><i class="fas fa-pen"></i></button>
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
                            <input onChange={this.onChangeTitle.bind(this)} className={'form-control'} type="text" name="title" value={this.state.title}/>
                            <label>Due Date</label>
                                <div class="input-group">
                                    <div class="input-group-append">
                                        <Datepicker
                                            className={'form-control'}
                                            selected={new Date(this.state.dueDate)}
                                            timeFormat="HH:mm"
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            onChange={this.onChangeDate.bind(this)}
                                        />
                                        <span class="input-group-text" id="basic-addon2">
                                            <i className={'fa fa-calendar'}></i>
                                        </span>
                                    </div>
                                </div>
                        </div>
                        <div class="modal-footer">
                            <button onClick={this.onShowModal.bind(this)} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={this.onEdit.bind(this)}  type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div> 
            </div>
        );
    }
}

export default Home;