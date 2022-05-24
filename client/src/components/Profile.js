import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../helpers/auth'
// Bootstrap components
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col'


const ProfileEdit = () => {

  const navigate = useNavigate()
  const [profile, setProfile] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    // newemail: '',
    confirmEmail: '',
    password: '',
    // newpassword: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({})



  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await axios.get('/api/account', {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },

        })
        setProfile(data)
        setFormData(data)
      } catch (error) {
        console.log(error)

      }

    }
    getProfile()
  }, [])


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const { data } = await axios.put('/api/account', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },

      })

    } catch (error) {
      console.log(error)

    }
  }


  return (

    <section className='section-profile'>
      <h2 className='text-center'>Your Profile</h2>
      <p>Become part of Britain&rsquo;s home of reading by introducing who you are. The more you share, the more rewarding your experience will be and you can amend your details at any time.</p>
      {/* Heading */}
      <Form className='edit-profile' onSubmit={handleSubmit}>


        <Row>
          <p className='create-account-paragraph-2'>Denotes required field *</p>
        </Row>
        {/* Title */}
        <Row className='form-label'>
          <Col sm={6}>
            <Form.Group className='mb-3' as={Col} controlId="formGridState">
              <h2>Your Details</h2>
              <Form.Label>Title*</Form.Label>
              <Form.Select className='trigger' name='title' value={formData.title} onChange={handleChange} >
                <option>Please select</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Miss</option>
                <option>Dr</option>
                <option>Prof</option>
                <option>Rev</option>
                <option>Mx</option>
              </Form.Select>
              {errors.title && <p className='text-danger'>{errors.title.message}</p>}
            </Form.Group>
          </Col>
        </Row>
        {/* Name */}
        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>First name*</Form.Label>
            <Form.Control type="text" name='firstName' value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className='text-danger'>{errors.firstName.message}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last name*</Form.Label>
            <Form.Control type="text" name='lastName' value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className='text-danger'>{errors.lastName.message}</p>}
          </Form.Group>
        </Row>

        <Form.Group as={Col}>
          <Button className='button-register mb-5' type="submit" onSubmit={handleSubmit}>
            UPDATE DETAILS
          </Button>
        </Form.Group>
        {/* Email */}
        <h2>Email Address</h2>
        <p>To change your registered email address, please enter your new address below.</p>
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">

            <Form.Label>Current Email*</Form.Label>
            <Form.Control type="email" name='email' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
          </Form.Group>

          {/* newform update */}

         


          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Confirm email*</Form.Label>
            <Form.Control type="email" name='confirmEmail' value={formData.confirmEmail} onChange={handleChange} />
            {errors.confirmEmail && <p className='text-danger'>{errors.confirmEmail.message}</p>}
          </Form.Group>
        </Row>
        <Form.Group as={Col}>
          <Button className='button-register mb-5' type="submit" onSubmit={handleSubmit} >
            UPDATE EMAIL
          </Button>
        </Form.Group>

        {/* Password */}
        <h2>Your Password</h2>
        <p>To change your password, please enter your existing password and follow the prompts.

          Passwords must be at least 10 characters in length. We recommend that you use a mixture of lower and upper case letters, numbers and special characters.

          Resetting your password will sign you out of all devices you are currently logged in to.</p>
        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Current password*</Form.Label>
            <Form.Control type="password" name='password' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
          </Form.Group>
         
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Confirm password*</Form.Label>
            <Form.Control type="password" name='passwordConfirmation' value={formData.passwordConfirmation} onChange={handleChange} />
            {errors.passwordConfirmation && <p className='text-danger'>{errors.passwordConfirmation.message}</p>}
          </Form.Group>
        </Row>

        <Form.Group as={Col}>
          <Button className='button-register' type="submit" onSubmit={handleSubmit}>
            UPDATE PASSWORD
          </Button>
        </Form.Group>

      </Form>



    </section>


  )

}
export default ProfileEdit