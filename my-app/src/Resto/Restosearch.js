import React, { Component } from 'react'
import { Table,Form,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
  import Restoform from './Restoform'

export class Restosearch extends Component {
  constructor() {
    super()
    this.state = {
      searchData: null,
      lastSearch:""
     
    }
  }
  search(key) {
    this.setState({lastSearch:key})
    fetch("http://localhost:3000/resto?q=" + key).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp)
        this.setState({ searchData: resp})
      })
    })
  }
  delete(id)
  {
   fetch("http://localhost:3000/resto/"+id,
   {
    method:"Delete",
    //headers:{
      //'content-Type':'application/json'
    //},
    
  }).then((result)=>{
    result.json().then((resp)=>{
      alert ('restaurent has been deleted')
      this.search(this.state.lastSearch)
    })
 
  })
  }
  render() {
    return (
      <Container>
      <Restoform />
        <h1>
          Restaurent search
        </h1>
       
        <Form.Control type="text"  onChange={(event) => this.search(event.target.value)} placeholder="restaurent search" />
        <div>
          {this.state.searchData ?

            <div>
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>Email</th>
                    <th>ratting</th>
                    <th>address</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
              {
                this.state.searchData.map((item) =>
                <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.ratting}</td>
                        <td>{item.address}</td>
                        <td><Link to={'/Restoupdate/'+item.id}><FontAwesomeIcon icon={faEdit}/></Link>
                        <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span>
                        
                        </td>
                      </tr>
                )
              }

              </tbody>
              </Table>
            </div>
            : ""
          }
         
        </div>
      </Container>

    )
  }
}

export default Restosearch