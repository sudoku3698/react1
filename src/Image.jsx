import React, { PureComponent } from 'react'

export default class MyComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
    this.increment=this.increment.bind(this)
    this.decrement=this.decrement.bind(this)
  }
   increment(){
    this.setState({
      count:this.state.count+1
    })
  }

  decrement(){
  if(this.state.count>0){
    this.setState({
      count:this.state.count-1
    })
  }

 }
  render() {
    return (
      <React.Fragment>
      <div> {this.state.count}</div>
      <button onClick={this.increment}>+ </button>
      <button onClick={this.decrement}>-</button>
      </React.Fragment>
    )
  }
}
