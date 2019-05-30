import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                        <a href="/">Back to top</a>
                        </p>
                        <p>Roel John Bobis &copy; Basic Todo App created using ReactJS</p>
                    </div>
                </footer> 
        );
    }
}

export default Footer;