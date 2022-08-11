import React from 'react'
import Home from './Home'
import Restolist from './Restolist'
import RestoCreat from './RestoCreat'
import Restosearch from './Restosearch'
import Restoupdate from './Restoupdate'

import Login from './Login'
import Logout from './Logout'
import Protect from './Protect'
import {Route } from 'react-router-dom'

function Navi() {
  return (
    <div className='App'>
  
      <logout/>
      <Route path='/logout'>
        <Logout/>
      </Route>
      
     <Route path='/login'
      render={(props)=><Login {...props}/>}>
      </Route>
   
      <Protect  path="/Restosearch" component={Restosearch}/>
      <Protect  path='/Restoupdate/:id' component={Restoupdate}/>
      <Protect  path="/RestoCreat" component={RestoCreat}/>
      <Protect  path="/Restolist" component={Restolist}/>
      <Protect exact  path="/"component={Home}/>
    </div>
  )
}

export default Navi