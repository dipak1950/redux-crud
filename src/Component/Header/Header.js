import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../Services/Action/Auth.Action'

function Header() {

    const { user } = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logout())
    }

    return (
        <>
            <header>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='logo col-2'>
                            <h3>STUDENT_CRUD</h3>
                        </div>
                        <nav className='col'>
                            <ul className='list-unstyled d-flex justify-content-end m-0 fs-5 '>
                                <li className='p-2'>
                                    <NavLink to='/' className="text-decoration-none text-white">
                                        Home
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/' className="text-decoration-none text-white">
                                        About
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/StudentForm' className="text-decoration-none text-white">
                                        Create_Stu
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/' className="text-decoration-none text-white">
                                        Blog
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/' className="text-decoration-none text-white">
                                        Contect
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className='col-2'>
                            {
                                user != null ?
                                    <Button variant='danger' onClick={() => { handleLogOut() }}>
                                        LogOut
                                    </Button> :
                                    <NavLink to='/signUp' className='btn btn-success'>
                                        SignUp
                                    </NavLink>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header