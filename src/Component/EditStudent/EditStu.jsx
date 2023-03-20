import React, { useEffect, useState } from 'react'
import { Container, Row, Button, Form } from 'react-bootstrap';
import { UpdateStudent } from '../../Services/Action/Student.Action'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function StudentEdit() {

    const { StudentInfo } = useSelector((state) => state.StudentReducer);
    const [initial, setInitial] = useState(StudentInfo)

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const HandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInitial({ ...initial, [name]: value })
    }

    const FormSubmit = (e) => {
        e.preventDefault();

        const data = initial;
        console.log(data, "data");

        dispatch(UpdateStudent(data));

        // handleEdit();

        navigate("/studentview");
    }
    // useEffect(() =>{
    //     navigate('/studentview')
    // },[])

    return (
        <>
            <Container>
                <Row>
                    <h1>Edit Student</h1>
                    <div className='studentForm'>
                        <div className='form'>
                            <Form onSubmit={FormSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Name :</Form.Label>
                                    <Form.Control type="name" placeholder="Enter Name" name='name' value={initial.name} onChange={(e) => { HandleChange(e) }} />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Email :</Form.Label>
                                    <Form.Control type="email" placeholder="Email" name='email' value={initial.email} onChange={(e) => { HandleChange(e) }} />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Cell Number : </Form.Label>
                                    <Form.Control type="number" placeholder="(000) 000-0000" name='cnumber' value={initial.cnumber} onChange={(e) => { HandleChange(e) }} />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Home Phone : </Form.Label>
                                    <Form.Control type="number" placeholder="(000) 000-0000" name='hnumber' value={initial.hnumber} onChange={(e) => { HandleChange(e) }} />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Course Name: </Form.Label>
                                    <Form.Control type="text" placeholder="Enter course" name='course' value={initial.course} onChange={(e) => { HandleChange(e) }} />
                                </Form.Group>

                                <Form.Group className="mb-3 d-flex" >
                                    {
                                        ['Male', 'Female'].map((Label, i) => {
                                            return (
                                                <>
                                                    <div className='radio p-2'>
                                                        <Form.Check key={i}
                                                            type="radio"
                                                            label={Label}
                                                            value={Label}
                                                            name='gender'
                                                            onChange={(e) => { HandleChange(e) }}
                                                            checked={initial.gender == Label}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </Form.Group>
                                <Button variant="primary" type="submit" className='btn' >
                                    Update
                                </Button>
                            </Form>
                        </div>
                        <div className='image'>
                            <img src='../image/student.jpg' />
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default StudentEdit;