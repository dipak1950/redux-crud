import React, { useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { PencilSquare, Trash3 } from 'react-bootstrap-icons';
import { DeleteStudent, GetInfo, getStudents } from '../../Services/Action/Student.Action'
import { useNavigate } from 'react-router-dom';

function StudentView() {

    const dispatch = useDispatch();
    const { StudentList } = useSelector((state) => state.StudentReducer);

    const navigate = useNavigate()
    const handleUpdate = (id) => {

        dispatch(GetInfo(id));
        // handleEdit()
        navigate('/studentedit')
    }

    const handleGet = () => {
        dispatch(getStudents())
    }

    // useEffect(() => {
    //     handleGet();
    // }, [])

    return (
        <>
            <Container>
                <h2>
                    Student List :-
                </h2>
                <Button onClick={() => navigate('/')}>
                    Back
                </Button>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contect</th>
                            <th>Course</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            StudentList.map((stu, id) => {
                                return (
                                    <>
                                        <tr>
                                            <td rowSpan={2}>
                                                {
                                                    stu.id
                                                }
                                            </td>
                                            <td rowSpan={2}>
                                                {
                                                    stu.name
                                                }
                                            </td>
                                            <td rowSpan={2}>
                                                {
                                                    stu.email
                                                }
                                            </td>
                                            <td>
                                                {
                                                    stu.cnumber
                                                }
                                            </td>
                                            <td rowSpan={2}>
                                                {
                                                    stu.course
                                                }
                                            </td>
                                            <td>
                                                <Button variant="success" onClick={() => handleUpdate(stu.id)}>
                                                    <PencilSquare />
                                                </Button>
                                                <Button variant="danger" onClick={() => dispatch(DeleteStudent(stu.id))}>
                                                    <Trash3 />
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {
                                                    stu.hnumber
                                                }
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default StudentView;