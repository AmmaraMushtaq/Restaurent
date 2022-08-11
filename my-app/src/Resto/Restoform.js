import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default class Restoform extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Restaurent</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to='/'><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to='/RestoCreat'><FontAwesomeIcon icon={faPlus} />Creat</Link></Nav.Link>
              <Nav.Link href="#link"><Link to='/Restolist'><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to='/Restosearch'><FontAwesomeIcon icon={faSearch} />search</Link></Nav.Link>
              {
                localStorage.getItem('login') ?
                  <Nav.Link href="#link"><Link to='/Logout'><FontAwesomeIcon icon={faUser} />Logout</Link></Nav.Link>
                  :
                  <Nav.Link href="#link"><Link to='/Login'><FontAwesomeIcon icon={faUser} />Login</Link></Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}

