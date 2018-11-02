import React, { Component } from 'react';
import Photo from '../Photo/Photo';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res =>res.json())
            .then(data => this.setState({posts:data.slice(90,100)}))
    }
    
    render() {
        return (
            <div>
                <h1>This is Feed</h1>
                {
                    this.state.posts.map( 
                        (post, i) => 
                    <Photo key={post.id} i= {i} post={post}>
                        </Photo>)
                }
            </div>
        );
    }
}

export default Feed;