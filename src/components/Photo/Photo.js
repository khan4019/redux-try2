import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Learning points
// 1. prop types
// 2. default props
// 3. set state from props
// 4. toggle css class based on condition
// 5. onclick update the parent state as well as child state ??? total item in the cart and state in the photo
// 6. now problem is we want to have the add event to add in the home...because product state is there 
// 7. Forget to pass id to the event handler
// 8. Debug the event handler in the source tab. put a break point
// 9. and then pass the id to the parent
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
        const {post} = this.props;
        console.log(post.liked);
        return (
            <div>
                <h1>{this.props.index+1}</h1>
                <img src={post.url} alt=""/>
                <div className="icon-container">
                    <div 
                        className={ `sprite icon ' + ${post.liked ? 'heart_filled' : 'heart_empty'}`}
                        onClick={() => this.props.addToCart(post.id)}
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