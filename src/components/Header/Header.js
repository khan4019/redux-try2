import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="icon-container">
                    <div className="sprite icon logo-icon"></div>
                    <div className="divider"></div>
                    <div className="sprite logo-name"></div>
                </div>
               
                {/* <img style = {{width:'500px', height: '100px', border: '5px solid red'}} src="../../images/sprite.png" alt=""/> */}
            </div>
        );
    }
}

export default Header;