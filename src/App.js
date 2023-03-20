import './App.css';
import StudentForm from './Component/CreateStudent/CreateStu';
import StudentView from './Component/ViewStudent/StudentView';
import StudentEdit from './Component/EditStudent/EditStu';
import { Route, Routes } from 'react-router-dom';
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

            <Routes>
                <Route path='/' element={<StudentForm />} />
                <Route path='/studentedit' element={<StudentEdit />} />
                <Route path='/studentview' element={<StudentView />} />
            </Routes>
        </>
    )
}

export default App;
