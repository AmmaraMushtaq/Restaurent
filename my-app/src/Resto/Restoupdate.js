
import Restoform from './Restoform'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class Restoupdate extends Component {
  constructor() {
    super();
    this.state = { name: null,
       email: null,
        ratting: null,
         address: null,
          id:null }
  }
  componentDidMount(){
    fetch('http://localhost:3000/resto/'+this.props.match.params.id)
    .then((response) => {
      response.json().then((result) => {
        this.setState({ name: result.name ,
          email:result.email,
          id:result.id,
          ratting:result.ratting

        })
      })

    })
  }
  Restoupdate(){ 
  fetch('http://localhost:3000/resto/'+this.state.id,{
    method:"put",
    headers:{
      'content-Type':'application/json'
    },
    body:JSON.stringify(this.state)
  }).then((result)=>{
    result.json().then((resp)=>{
      alert ('restaurent has been update')
    
    })
 
  })

}
  render() {
  // console.warn(this.state);
    return (
      <div>
      <Restoform />
        <h1>Restaurent update</h1>
        <input onChange={(event) => {
          this.setState({ name: event.target.value })
        }} placeholder="Restaurent Name" value={this.state.name} /><br /><br />

        <input onChange={(event) => {
          this.setState({ email: event.target.value })
        }} placeholder="Restaurent Email"value={this.state.email} /><br /><br />

        <input onChange={(event) => {
          this.setState({ ratting: event.target.value })
        }} placeholder="Restaurent Ratting "value={this.state.ratting} /><br /><br />

        <input onChange={(event) => {
          this.sETState({ address: event.target.value })
        }} placeholder="Restaurent address" value={this.state.address}/><br /><br />
        <Button onClick={()=>{this.Restoupdate()}}>Add Restaurent</Button>
      </div>
    )
  }
}
export default Restoupdate

