import { CREAT_STU, DELETE_STU, GET_INFO, GET_STUDENTS, UPDATE_STU } from "../Constant/Action.Types"

export const CreateStudent = (data) => {
    return {
        type: CREAT_STU,
        payload: data
    }
}
export const getStudents = () =>{
    return {
        type : GET_STUDENTS
    }
}
export const DeleteStudent = (id) => {
    return {
        type: DELETE_STU,
        payload: id
    }
}

export const GetInfo = (id) => {
    return {
        type: GET_INFO,
        payload: id
    }
}

export const UpdateStudent = (data) => {
    return {
        type: UPDATE_STU,
        payload: data
    }
}

// export const LocalStudent = (data) => {
//     return {
//         type: LOCAL_STU,
//     }
//     localStorage.setItem('data', JSON.stringify(data));
// };