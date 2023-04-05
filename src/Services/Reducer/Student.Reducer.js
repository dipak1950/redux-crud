import { CREAT_STU, DELETE_STU, GET_INFO, GET_STUDENTS, UPDATE_STU } from "../Constant/Action.Types";
const initialState = {
    StudentList: [],
    StudentInfo: {},
    isEdit: false
}
const StudentReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREAT_STU: {

            const data = [...state.StudentList, action.payload];
            // console.log(data);
            // localStorage.setItem('myStud', JSON.stringify(data))
            return {
                ...state,
                StudentList: [...state.StudentList, action.payload]
            }
            break;
        }
        case DELETE_STU: {
            // const filteredItems = state.StudentList.filter(stu => stu.id !== action.payload);
            // localStorage.setItem('myStud', JSON.stringify(filteredItems));
            return {
                ...state,
                StudentInfo:action.payload,
                isEdit: false
            }
            break;
        }
        case GET_STUDENTS: {
            // const get_Students = JSON.parse(localStorage.getItem('myStud'));
            return {
                ...state,
                StudentList: action.payload,
                isEdit: false

            }
            break;
        }
        case GET_INFO: {
            // const GetInfo = state.StudentList.filter((stu) => stu.id === action.payload)
            return {
                ...state,
                // StudentInfo: GetInfo[0]
                StudentInfo: action.payload,
                isEdit: true

            }
            break;
        }
        case UPDATE_STU:
            // const UpdateStu = state.StudentList.map((stu) => {
            //     if (stu.id === action.payload.id) {
            //         return action.payload
            //     }
            //     return stu;
            // });

            // console.log("update");
            // localStorage.setItem('myStud', JSON.stringify(UpdateStu));
            return {
                ...state,
                StudentInfo: {},
                isEdit: false
            }
            break;

        // case LOCAL_STU: {
        //     const dataToSave = { ...state, ...action.payload };
        //     LocalStudent(dataToSave);
        //     return dataToSave;
        // }

        default:
            return state;
    }
}

export default StudentReducer;