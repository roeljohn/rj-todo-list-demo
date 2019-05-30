import React, { Component } from 'react';
import { settings } from './../settings'
class Header extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            dropdown: false,
            countNotification: ''
        };
    }
    componentDidMount() {
        setInterval(() => this.setState({ countNotification: settings.notification.length}), 1000)
    }
    onShowNotification(){
        this.setState(
            (state, props) => {
              return { dropdown: !this.state.dropdown };
        });
    }
    render() {
        return (
            <div className={'bg-dark'}>
                <div className={'container'}>
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">Todo's React App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown09">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </li> */}
                    </ul>
                    <div className={`dropdown ${this.state.dropdown ? 'show' : 'hide'}`}>
                                <a onClick={this.onShowNotification.bind(this)} className="btn btn-notification" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-bell"></i> <span className="badge badge-light">{this.state.countNotification}</span>
                                </a>

                                <div className={`dropdown-menu ${this.state.dropdown ? 'show' : 'hide'}`} aria-labelledby="dropdownMenuLink">
                                {settings.notification.map((notify, id) => {
                                    return(
                                        <a className="dropdown-item" href="#">{notify.title}</a>
                                    )
                                })}
                                </div>
                            </div>
                    </div>
                </nav>
                </div>
            </div>
        );
    }
}

export default Header;