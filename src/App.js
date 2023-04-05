import './App.css';
import StudentForm from './Component/CreateStudent/CreateStu';
import StudentView from './Component/ViewStudent/StudentView';
import StudentEdit from './Component/EditStudent/EditStu';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import SignUp from './Component/SignUp/SignUp';
import Login from './Component/Login/Login';
// import { useState } from 'react';

function App() {

    // const [isEdit, setIsEdit] = useState(false);

    // const handleEdit = () => {

    //     setIsEdit(!isEdit)
    // }

    return (
        <>
            {/* {
                isEdit ? <StudentEdit handleEdit={handleEdit} /> : <StudentForm />
            }
            <StudentView handleEdit={handleEdit} /> */}
            <Header />
            <Routes>
                <Route path='/' element={<StudentView />} />
                <Route path='/studentedit' element={<StudentEdit />} />
                <Route path='/StudentForm' element={<StudentForm />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </>
    )
}

export default App;
