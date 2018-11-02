import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Learning points
// 1. prop types
// 2. default props
// 3. set state from props
// 4. toggle css class based on condition
// 5. onclick update the parent state as well as child state ??? total item in the cart and state in the photo
//
class Photo extends Component {
    constructor(props) {
        super(props);
        this.state={
            liked: false,
            added:false,
        }
    }
    
    toggleLike = () =>{
        this.setState({liked: !this.state.liked});
    }

    toggleAddToCart = () => {
        this.setState({added: !this.state.added})
    }
    
    render() {
        const {post, i} = this.props;
        return (
            <div>
                <h1>{this.props.index+1}</h1>
                <img src={post.url} alt=""/>
                <div className="icon-container">
                    <div 
                        className={ `sprite icon ' + ${this.state.liked ? 'heart_filled' : 'heart_empty'}`}
                        onClick={this.toggleLike}
                    ></div>
                    <div className="sprite icon comment"></div>
                    <div 
                        className={ `sprite icon ' + ${this.state.added ? 'remove' : 'add'}`}
                        onClick={this.toggleAddToCart}
                    ></div>
                </div>
            </div>
        );
    }
}

Photo.propTypes = {
    i: PropTypes.number.isRequired,
    post:PropTypes.shape({
        url:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired
    }),
    liked:PropTypes.bool
}

Photo.defaultProps = {
    index:100
}

export default Photo;