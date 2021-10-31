import React, { Component } from 'react';

class Error extends Component{
    constructor(props){
        super(props);
        this.state={
            isError:false
        }
    }
componentDidCatch(error, info){
   this.setState({isError: true})
}



render(){
    if(this.state.isError){
        return  <h1>Oops! Error</h1>
    }
    return this.props.children
}
}
export default Error;