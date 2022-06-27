import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Button, useColorMode } from '@chakra-ui/react'

import { useParams, Link, useNavigate } from 'react-router-dom'

import { userIsAuthenticated, getTokenFromLocalStorage } from '../helpers/auth'
import Spinner from '../utilities/Spinner'


const Account = () => {
  // const { colorMode, toggleColorMode } = useColorMode()
  const navigate = useNavigate()

  const [account, setAccount] = useState('')
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    !userIsAuthenticated() && navigate('/login')

    const getAccount = async () => {
      try {
        const { data } = await axios.get('/api/account', {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })

        setAccount(data)
        console.log(data)


      } catch (error) {
        console.log(error)

      }
    }
    getAccount()

  }, [navigate])

  return (
    <section>
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}



      <h1 className='text-center mt-5'>Account Dashboard</h1>
      <h5>Hi {account.firstName}, welcome to your account dashboard</h5>
      <div className='box'>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">


                <a href="/account/profile/" className="btn">👤Your Profile</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <a href="/account/wishlist/" className="btn">❤️Wish Lists</a>
              </div>
            </div>
          </div>

        </div>
      </div>




    </section>

  )












}



export default Account