import React, { Component } from 'react';
import { settings } from './../settings';
import DateBadge from './../components/dateBadge'
import Datepicker from 'react-datepicker'
import moment from 'moment'
import GetTodosApi from '../api/GetTodosApi'
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            addModal: false,
            modal: false,
            delete: false,
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
        this.loadGetTodos();
    }
    loadGetTodos() {
        GetTodosApi('1212313', '12313', result => {
          const { data, error } = result;
          if (error) {
            // Handle error
            console.log('error')
          }
          if (data) {
              console.table('table', data)
          }
      });
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
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`, {
            completed: true
          })
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
            this.setState(
                (state, props) => {
                  return { 
                      todos: newArray
                };
            });
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
        console.log(newNotification)
        })
        .catch(error => {
        console.log(error);
        })
    }
    inComplete(id, todoId, userId, title, archived, dueDate){
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`, {
            completed: false
          })
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
            this.setState(
                (state, props) => {
                  return { 
                      todos: newArray
                };
            });
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
    onDelete(todoId){
        axios.delete(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`)
        .then(response => {
            const todos = this.state.todos.filter(todo => todo.id !== todoId)
            this.setState(
                (state, props) => {
                  return { todos };
            });
        })
        .catch(error => {
        console.log(error);
        })
    }
    onAdd(title, dueDate){
        console.log()
        axios.post('https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos', {
            title: this.state.title,
            startDate: new Date(),
            dueDate: this.state.dueDate
          })
          .then(response => {
            console.log(response.data.id);

            let newArray = Object.assign([], this.state.todos); //creating copy of object
            newArray.push({
                id: response.data.id,
                userId: 26,
                title: title,
                completed: false,
                archived: false,
                dueDate: dueDate,
                startDate: new Date()
            }); 
            this.setState(
                (state, props) => {
                  return { todos: newArray };
            });
            })
          .catch(function (error) {
            console.log(error);
          });
    }
    onEdit(){
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${this.state.id}`, {
            userId: this.state.userId,
            title: this.state.title,
            completed: this.state.completed,
            archived: this.state.archived,
            dueDate: this.state.dueDate
          })
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
            this.setState(
                (state, props) => {
                  return { todos: newArray };
            });
        console.log(this.state.todos)
        })
        .catch(error => {
        console.log(error);
        })
    }
    onArchive(id, todoId, userId, title, completed, dueDate){
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`, {
            archived: true
          })
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
            this.setState(
                (state, props) => {
                  return { todos: newArray };
            });
        let newNotification = Object.assign([], settings.notification);
        newNotification.push({
            id:`${todoId}`,
            userId: userId,
            title: title,
            completed: completed,
            archived: true,
            dueDate: dueDate,
        }); 
        settings.notification = newNotification;
        })
        .catch(error => {
        console.log(error);
        })
    }
    onUnarchive(id, todoId, userId, title, completed, dueDate){
        axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`, {
            archived: false
          })
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
            this.setState(
                (state, props) => {
                  return { todos: newArray };
            });
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
    onShowAddModal(){
        this.setState(
            (state, props) => {
              return { addModal: !this.state.addModal };
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
    deleteWarning(todoId){
        this.setState(
            (state, props) => {
              return { 
                  delete: !this.state.delete, 
                  todoId: todoId
            };
        });
    }
    render() {
        return (
            <div className={'row todo-page'}>
                    <div className="col-md-4">
                        <h3>
                            <div className={'row'}>
                                <div className={'col-md-6'}>
                                    Todo's 
                                </div>
                                <div className={'col-md-6'}>
                                <button type="button" className="btn btn-sm btn-primary btn-archive float-right" data-toggle="modal" data-placement="top" title="Add Todo"
                                onClick={() => 
                                                            {
                                                                this.onShowAddModal()
                                                            }
                                                        }  ><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </h3>
                        <div className="card mb-4 shadow-sm border-info">
                            <ul className="list-group">
                                {this.state.todos.map((todo, id) => {
                                    const currentDate = moment(todo.dueDate).format('MMMM DD YYYY, h:mm:ss a');
                                   
                                    if(todo.completed === false && todo.archived === false){
                                        return(
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col col-lg-1">
                                                        <input onClick={() => 
                                                            this.onComplete(id, todo.id, todo.userId, todo.title, todo.archived, todo.dueDate)} type="checkbox" name="complete"/>
                                                    </div>
                                                    <div className="col-lg-8 todo-text">
                                                    <p>{todo.title} <DateBadge currentDate={currentDate} startDate={todo.startDate} endDate={todo.dueDate}/></p>
                                                    </div>
                                                    <div className="col-lg-3 todo-edit-btn">
                                                        <button type="button" className="btn btn-primary btn-edit" onClick={() => 
                                                            {
                                                                this.onShowModal()
                                                                this.getTodo(id, todo.id, todo.userId, todo.title, todo.archived, todo.completed, currentDate)
                                                            }
                                                        }  data-toggle="modal" data-target="#exampleModal"><i className="fas fa-pen"></i></button>
                                                        <button onClick={() => this.onArchive(id, todo.id, todo.userId, todo.title, todo.completed, todo.dueDate)} type="button" data-toggle="tooltip" data-placement="top" title="Archive Todo" className="btn btn-primary btn-archive"><i className="fas fa-archive"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                })}

                            </ul>
                        </div>
                        </div>

                        <div className="col-md-4">
                    <h3>Done</h3>
                    <div className="card mb-4 shadow-sm border-success done">
                        <ul className="list-group">
                            {this.state.todos.map((todo, id) => {
                                const currentDate = new Date(todo.dueDate).toString()
                                if(todo.completed === true && todo.archived === false){
                                    return(
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col col-lg-1">
                                                <input onClick={() => 
                                                            this.inComplete(id, todo.id, todo.userId, todo.title, todo.archived, todo.dueDate)} type="checkbox" data-toggle="tooltip" data-placement="top" title="Not Done" name="incomplete" defaultChecked={true}/>
                                                </div>
                                                <div className="col-lg-8 todo-text">
                                                <p>{todo.title} <DateBadge currentDate={currentDate} startDate={todo.startDate} endDate={todo.dueDate}/></p>
                                                </div>
                                                <div className="col-lg-3 todo-edit-btn">
                                                <button type="button" className="btn btn-primary btn-edit" onClick={() => 
                                                            {
                                                                this.onShowModal()
                                                                this.getTodo(id, todo.id, todo.userId, todo.title, todo.archived, todo.completed, currentDate)
                                                            }
                                                        }  data-toggle="modal" data-target="#exampleModal" disabled><i className="fas fa-pen"></i></button>
                                                <button onClick={() => this.onArchive(id, todo.id, todo.userId, todo.title, todo.completed, todo.dueDate)} type="button" data-toggle="tooltip" data-placement="top" title="Archive Todo" className="btn btn-primary btn-archive"><i className="fas fa-archive"></i></button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    </div>

                        <div className="col-md-4">
                            <h3>Archive</h3>
                            <div className="card mb-4 shadow-sm border-danger archive">
                                <ul className="list-group">
                                {this.state.todos.map((todo, id) => {
                                    const currentDate = new Date(todo.dueDate).toString()
                                    if(todo.archived === true){
                                        return(
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col col-lg-1">
                                                    <button onClick={() => this.onUnarchive(id, todo.id, todo.userId, todo.title, todo.completed, todo.dueDate)} type="button" data-toggle="tooltip" data-placement="top" title="Unarchive Todo" className="btn btn-primary btn-unarchive"><i className="fas fa-box-open"></i></button>
                                                    </div>
                                                    <div className="col-lg-8 todo-text">
                                                    <p>{todo.title} <DateBadge currentDate={currentDate} startDate={todo.startDate} endDate={todo.dueDate}/></p>
                                                    </div>
                                                    <div className="col-lg-3 todo-edit-btn">
                                                    <button type="button" className="btn btn-primary btn-edit" onClick={() => 
                                                            {
                                                                this.onShowModal()
                                                                this.getTodo(id, todo.id, todo.userId, todo.title, todo.archived, todo.completed, currentDate)
                                                            }
                                                        }  data-toggle="modal" data-target="#exampleModal" disabled><i className="fas fa-pen"></i></button>
                                                    <button type="button" onClick={() => {
                                                        // this.onDelete(id, todo.id)
                                                        this.deleteWarning(todo.id)
                                                    }}  className="btn btn-delete-forever" data-toggle="modal" data-target="#deleteWarning" ><i className="fas fa-trash-alt"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    } 
                                })}
                                </ul>
                            </div>
                    </div>
                    {/* Edit Modal */}
                    <div className={`modal fade ${this.state.modal ? 'show' : 'hide'}`} id="addModal" style={{display: `${this.state.modal ? 'block' : ''}`, paddingRight:  `${this.state.modal ? '17px' : ''}`}}  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label>Title</label>
                            <input onChange={this.onChangeTitle.bind(this)} className={'form-control'} type="text" name="title" value={this.state.title}/>
                            <label>Due Date</label>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <Datepicker
                                            className={'form-control'}
                                            selected={new Date(this.state.dueDate)}
                                            timeFormat="HH:mm"
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            onChange={this.onChangeDate.bind(this)}
                                        />
                                        <span className="input-group-text" id="basic-addon2">
                                            <i className={'fa fa-calendar'}></i>
                                        </span>
                                    </div>
                                </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => {
                            this.onShowModal()
                            this.setState(
                                (state, props) => {
                                  return { title: '' };
                            })
                        }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={() => {
                                this.onEdit()
                                this.onShowModal()
                            }}type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div> 
                    {/* Add Modal */}
                    <div className={`modal fade ${this.state.addModal ? 'show' : 'hide'}`} id="exampleModal" style={{display: `${this.state.addModal ? 'block' : ''}`, paddingRight:  `${this.state.addModal ? '17px' : ''}`}}  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label>Title</label>
                            <input onChange={this.onChangeTitle.bind(this)} className={'form-control'} type="text" name="title" value={this.state.title}/>
                            <label>Due Date</label>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <Datepicker
                                            className={'form-control'}
                                            selected={new Date()}
                                            timeFormat="HH:mm"
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            onChange={this.onChangeDate.bind(this)}
                                        />
                                        <span className="input-group-text" id="basic-addon2">
                                            <i className={'fa fa-calendar'}></i>
                                        </span>
                                    </div>
                                </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => {
                                this.onShowAddModal()
                                this.setState(
                                    (state, props) => {
                                      return { title: '' };
                                });
                            }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={() => {
                                this.onAdd(this.state.title, this.state.dueDate)
                                this.onShowAddModal()
                                this.setState(
                                    (state, props) => {
                                      return { title: '' };
                                })
                            }}  type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div> 
                    {/* Delete Modal */}
                    <div className={`modal modal-delete fade ${this.state.delete ? 'show' : 'hide'}`} id="deleteWarning" style={{display: `${this.state.delete ? 'block' : ''}`, paddingRight:  `${this.state.delete ? '17px' : ''}`}}  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to do this?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <i class="fas fa-exclamation-triangle"></i>
                            <h5>Deleting this will be permanently gone in your database</h5>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => {
                                this.deleteWarning()
                            }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={() => {
                                this.onDelete(this.state.todoId)
                                this.deleteWarning()
                                this.setState(
                                    (state, props) => {
                                      return { title: '' };
                                })
                            }}  type="button" className="btn btn-primary">Delete</button>
                        </div>
                        </div>
                    </div>
                    </div> 
            </div>
        );
    }
}

export default Home;