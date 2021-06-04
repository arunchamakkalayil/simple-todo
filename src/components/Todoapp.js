import React, { Component } from "react";

export default class Todoapp extends Component {
  state = {
    input: "",
    items:[]
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });

    
  };

  storeItems = (event)=>{
      event.preventDefault()
    const { input } = this.state;
 
  

    this.setState({
        items:[...this.state.items,input],
        input:""
 
    })



  }
  deleteItem = (key)=>{

   
    this.setState({
    items:this.state.items.filter((data,index) => {
      return(
        index !==key
      )
    } )

    
    })

    console.log(key)
  

  }

  render() {
    const { input ,items} = this.state;
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo</h1>
          <input
            value={input}
            onChange={this.handleChange}
            type="text"
            placeholder="Enter items"
          />
        </form>
        <ul>
         {items.map((data,index)=>{
             return(
             <li key={index}>{data}<i className="fa fa-trash-alt" onClick={()=>{
               this.deleteItem(index)
             }}></i></li>)
         })}
         
        </ul>
      </div>
    );
  }
}
