import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

//Tasks
// 1. inline Style 
// 2. Style in javascript
// 3. add cart and it will break, then add default props

// 4. Add link to after addng router


class Header extends Component {
    render() {
        const cart = this.props.cart;
        console.log('header', cart.length);
        const cartSizeStyle ={
            color:'#e94949',
            fontWeight:700,
            display: (cart.length) ? 'inline-block': 'none'
        }

        return (
            <div className="header">
                <div className="icon-container">
                    <div className="sprite icon logo-icon"></div>
                    <div className="divider"></div>
                    <div className="sprite logo-name"></div>
                    <div style={{width:'50%'}}></div>
                    <Link to="/cart">
                        <div 
                            className={ `sprite icon ' + ${cart.length ? 'heart_filled' : 'heart_empty'}`}
                            >
                        </div>
                    </Link>
                    <sup style={cartSizeStyle}>{cart.length}</sup>
                </div>
            </div>
        );
    }
}

Header.defaultProps = {
    cart:[]
}

export default Header;