import React, { Component } from 'react';

// Tasks
// 1. proptypes
// 2. default props
// 3. state from props
// 4. toggle css class based on condition

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state={
            liked:false
        }
    }
    
    render() {
        const post = this.props.post;
        return (
            <div>
                <img src={post.url} alt=""/>
                <div className="icon-container">
                    <div className="sprite icon heart_empty"></div>
                    <div className="sprite icon comment"></div>
                    <div className="sprite icon add"></div>
                    <div className="sprite icon remove"></div>
                </div>
            </div>
        );
    }
}

export default Photo;