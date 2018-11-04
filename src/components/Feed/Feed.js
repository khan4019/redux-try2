import React, { Component } from 'react';
import Photo from '../Photo/Photo';
import Header from '../Header/Header';

// Tasks
// initially put the header in the app.js
// when want to display the cart count in the header. we will face a problem state is here. 
// temporarily we will bring it down in the product-feed. 
// also tell that we will solve it by using redux in the afternoon

// add to cart not displaying in the child photo component
// update in the posts as  well. 

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            cart:[]
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res =>res.json())
            .then(data => this.setState({posts:data.slice(90,100)}))
    }

    addToCart = (id) =>{
        const {cart, posts} = this.state;
        // let newCart;
        // if(cart.includes(id)){
        //     newCart = cart.filter( item => item !==id);
        // }
        // else {
        //     newCart  =[...cart, id];
        // }

        // update posts
        const newPosts = posts.map(post =>{
            if(post.id===id){
                post.liked = !post.liked
            }
            return post;
        })
        
        // set state
        this.setState({ posts:newPosts});
    }
    
    render() {
        const {cart, toggleAddToCart} = this.props;
        console.log('cart in feed', this.props.cart);
        return (
            <div>
                <Header cart={cart.cart}></Header>
                {
                    this.state.posts.map( 
                        (post, i) => 
                    <Photo 
                        key={post.id} 
                        i = {i} 
                        post={post} 
                        addToCart={this.props.toggleAddToCart}
                        >
                    </Photo>)
                }
            </div>
        );
    }
}

export default Feed;