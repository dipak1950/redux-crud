import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Google } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logInInitiate, LoginWithGoogle } from '../../Services/Action/Auth.Action'

function Login() {

    const [initial, setInitial] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, error } = useSelector(state => state.AuthReducer)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInitial({ ...initial, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(logInInitiate(initial.email, initial.password));

    }

    const handleCancel = () => {
        navigate('/')
    }

    const handleGoogle = () => {
        dispatch(LoginWithGoogle());
    }

    const handleLogin = () => {
        dispatch(logInInitiate());
    }

    if (user !== null) {
        navigate('/')
    } else {
        return (
            <>
                <div className='form vh-100 vw-100 d-flex justify-content-center position-fixed align-items-center top-0 start-0 bg-white'>
                    <div className='wrapper'>
                        <h2 className='text-center'>
                            LOGIN
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

                            {
                                error !== null ?
                                    error === 'auth/user-not-found' ?
                                        <p className='text-danger'> Please Create Account. </p>
                                        :
                                        error === 'auth/wrong-password' ?
                                            <p className='text-denger'> Password Wrong </p>
                                            : <p className='text-danger'> Somthing Went Wrong </p>
                                    : null
                            }

                            <div className='text-center'>
                                <div className=''>
                                    <Button variant="primary" type="submit" onClick={() => { handleLogin() }}>
                                        LOGIN
                                    </Button>
                                    <Button variant="primary" type="submit" onClick={() => { handleCancel() }}>
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className='text-center'>
                                    <p>
                                        Create Your Account ?
                                        <span>
                                            <NavLink to='/signup' className='text-dark'>
                                                SignUp
                                            </NavLink>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Form>
                        <div className='text-center'>
                            <Button variant='primary' onClick={() => { handleGoogle() }} >
                                <span> <Google /> Login with Google</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Login