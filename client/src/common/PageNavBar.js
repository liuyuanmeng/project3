import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { userIsAuthenticated } from '../helpers/auth'
import logo from './../images/book.png'

const PageNavbar = () => {

  const navigate = useNavigate()


  const handleLogout = () => {

    window.localStorage.removeItem('books')

    navigate('/login')
  }

  return (
    <Navbar  expand="sm">

      <Container>

        <Navbar.Brand as={Link} to='/'>
          Home
          <img src={logo}/>
         
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>

          <Nav.Link as={Link} to="/account/wishlist">♥️Wish List</Nav.Link>
          {/* <Nav.Link as={Link} to="/books">Books</Nav.Link> */}
          {userIsAuthenticated() ?
            <>
              <Nav.Link as={Link} to="/account">Account</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>

            :
            <>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )

   
}

export default PageNavbar