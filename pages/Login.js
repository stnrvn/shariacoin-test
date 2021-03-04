import { Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import {
  useHistory
} from 'react-router-dom'
import { login } from '../store/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'



export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    let payload = {
      email,
      password
    }
    console.log(payload)
    dispatch(login(payload))
  }

  return (
    <Form onSubmit={handleLogin}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
    type="email"
    placeholder="Enter email"
    name="email"
    onChange={handleEmail}
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
    type="password"
    placeholder="Password"
    name="password"
    onChange={handlePassword}
    />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )
}