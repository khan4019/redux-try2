import React, { Component } from 'react';

// Learning points
// 1. prop types
// 2. default props
// 3. set state from props
// 4. toggle css class based on condition

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
        const post = this.props.post;
        console.log(this.state.liked);
        return (
            <div>
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

export default Photo;