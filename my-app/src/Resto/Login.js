import React, { Component } from 'react'
import Restoform from './Restoform'
import background from './image/abc.jpg'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            //name:'',
           // password:'',
           // email:''
           isReg:false
        }
    }
    login(){
        console.warn(this.state)
    
    fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp",resp)
        if(resp.length>0){
          localStorage.setItem('login',JSON.stringify(resp))
            this.props.history.push('Restolist');
            // console.log("resttolilst");
        }
        else{alert("please check username and password")}
       
      })
    })
}
  render() {
    return (
      
        <div> 
       
         <Restoform />
        <img src={ background} alt=""/>
         
       
      
      {
        !this.state.isReg?
        <div>
        <h1>Login</h1>
        
        <input placeholder='email'
        type='text' name='email' onChange={(event)=>this.setState({email:event.target.value})}/><br/><br/>
        <input 
         placeholder='password'
         type='password' name='password' onChange={(event)=>this.setState({password:event.target.value})}/><br/><br/>
        <button onClick={()=>{this.login()}}>Login</button>
        <button onClick={()=> this.setState({isReg :true})}> go to Reg</button>
        </div>
        :
        <div>
        <input placeholder='name'
        type='text' name='user' onChange={(event)=>this.setState({name:event.target.value})}/><br/><br/>
        <input placeholder='email'
        type='text' name='email' onChange={(event)=>this.setState({email:event.target.value})}/><br/><br/>
        <input 
         placeholder='password'
         type='password' name='password' onChange={(event)=>this.setState({password:event.target.value})}/><br/><br/>

<input 
         placeholder=' confirm password'
         type='password' name='password' onChange={(event)=>this.setState({password:event.target.value})}/><br/><br/>
        <button onClick={()=>{this.login()}}>Register</button>
        <button onClick={() => this.setState({isReg:false})}>go to login</button>
 
        </div>
        }
        </div>
     
    )
  }
}
