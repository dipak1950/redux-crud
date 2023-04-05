import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signUpInitiate } from '../../Services/Action/Auth.Action'
import './SignUp.css'

function SignUp() {

    const [initial, setInitial] = useState({
        email: '',
        password: '',
        cpassword: ''
    })
    const [Err, setErr] = useState('')
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.AuthReducer)

    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInitial({ ...initial, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (initial.password === initial.cpassword) {
            dispatch(signUpInitiate(initial.email, initial.password))
            console.log("Done");
        }
        else {
            setErr("Does't match email and password")
            console.log("Error");
        }
    }

    const handlesignUp = () => {
        dispatch(signUpInitiate());
    }

    const handleCancel = () => {
        navigate('/')
    }

    if (user !== null) {
        navigate('/')
    } else {    
        return (
            <>
                <div className='form vh-100 vw-100 d-flex justify-content-center position-fixed align-items-center top-0 start-0 bg-white'>
                    <div className='wrapper'>
                        <h2 className='text-center'>
                            SIGNUP
                        </h2>
                        <Form onSubmit={(e) => { handleSubmit(e) }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={initial.email} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' value={initial.password} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="C_Password" name='cpassword' value={initial.cpassword} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>
                            <Form.Text className="text-muted">
                                {
                                    Err
                                }
                            </Form.Text>

                            <div className='text-center'>
                                <div className=''>
                                    <Button variant="primary" type="submit" onClick={() => { handlesignUp() }}>
                                        SignUp
                                    </Button>
                                    <Button variant="primary" type="submit" onClick={() => { handleCancel() }}>
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className='text-center'>
                                    <p>
                                        Already have Account ?
                                        <span>
                                            <NavLink to='/login' className='text-dark'>
                                                Login
                                            </NavLink>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </>
        )
    }

}

export default SignUp