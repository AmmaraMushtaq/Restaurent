import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Restoform from './Restoform'

export class RestoCreat extends Component {
  constructor() {
    super();
    this.state = { name: null, email: null, ratting: null, address: null }
  }
  creat() {

    fetch('http://localhost:3000/resto',{
      method:"post",
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert ('restaurent has been added')
      
      })
   
    })

  }
  render() {
  
    return (
      <div>
      <Restoform />
        <h1>Restaurent Creat</h1>
        <input onChange={(event) => {
          this.setState({ name:event.target.value })
        }} placeholder="Restaurent Name" /><br /><br />

        <input onChange={(event) => {
          this.setState({ email: event.target.value })
        }} placeholder="Restaurent Email" /><br /><br />

        <input onChange={(event) => {
          this.setState({ ratting: event.target.value })
        }} placeholder="Restaurent Ratting " /><br /><br />

        <input onChange={(event) => {
          this.setState({ address: event.target.value })
        }} placeholder="Restaurent address" /><br /><br />
        <Button onClick={() => { this.creat() }}>Add Restaurent</Button>
      </div>
    )
  }
}

export default RestoCreat