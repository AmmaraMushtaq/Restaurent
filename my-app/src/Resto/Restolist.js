import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faEdit,faSearch,faTrash } from '@fortawesome/free-solid-svg-icons'
  import Restoform from './Restoform'
export class Restolist extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    }
  }
  componentDidMount() {
    this.getdata()
  }
  getdata(){
   fetch("http://localhost:3000/resto/")
   .then((Response)=>{
    Response.json().then((result)=>{
      this.setState({list:result})
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
      this.getdata()
    })
 
  })
  }
  render() {
   
    return (
      <div>
      <Restoform />
        <h1>Restaurent List</h1>
        <Link to={'/Restosearch/'}><FontAwesomeIcon icon={faSearch}/>Search</Link>
       
        <></>
        {
          this.state.list ?
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
                    this.state.list.map((item, i) =>
                      
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
            : <p>Please wait...</p>
        }
      </div>
    );
  }
}

export default Restolist