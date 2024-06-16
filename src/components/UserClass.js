import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        //console.log(this.props)
    }

    componentDidMount(){
        //console.log("component did mount",this.props)
    }

    render(){
        const {name, location} = this.props
        //console.log("re-rendered");
        return (
          <div className="user-card">
            <h3>count: {this.state.count}</h3>
            <button onClick={ ()=>{
              this.setState({count: this.state.count+1})  
            }} >Increment</button>
            <h3>name: {name}</h3>
            <h3>name: {location}</h3>
            <h3>From Class component</h3>
          </div>
        );
    }

}

export default UserClass