import { CREAT_STU, DELETE_STU, GET_INFO, GET_STUDENTS, UPDATE_STU } from "../Constant/Action.Types"
import { db } from "../../Firebase";
import { addDoc, collection, doc, setDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

export const CreateStudent = (data) => {
    return {
        type: CREAT_STU,
        payload: data
    }
}
export const getStudents = (data) => {
    return {
        type: GET_STUDENTS,
        payload: data
    }
}
export const DeleteStudent = () => {
    return {
        type: DELETE_STU
    }
}

export const GetInfo = (data) => {
    return {
        type: GET_INFO,
        payload: data
    }
}

export const UpdateStudent = () => {
    return {
        type: UPDATE_STU,
    }
}

// export const LocalStudent = (data) => {
//     return {
//         type: LOCAL_STU,
//     }
//     localStorage.setItem('data', JSON.stringify(data));
// };

export const createStustorage = (data) => {

    // console.log(data, "data");
    return async dispatch => {
        await setDoc(doc(db, "Students", `${data.id}`), data).then((res) => {
            console.log("Done", res);
            dispatch(getStu())
        }).catch((err) => {
            console.log(err, "err");
        })
    }

    // return async dispatch => {
    //     await addDoc(collection(db, "Students",), data).then((res) => {
    //         console.log("DOne", res.id);
    //         dispatch(CreateStudent(data))
    //     }).catch((err) => {
    //         console.log(err, "err");
    //     })
    // }
}

export const getsStu = () => {
    return async dispatch => {
        await getDocs(collection(db, "Students")).then((res) => {
            let newArr = [];
            res.forEach((doc) => {
                newArr = [...newArr, doc.data()]
            })
            dispatch(getStudents(newArr))
        }).catch((err) => {
            console.log(err, "err");
        })
    }
}

export const getStu = (id) => {
    return dispatch => {
        getDoc(doc(db, "Students", `${id}`)).then((res) => {
            console.log("up", res.data());
            dispatch(GetInfo(res.data()))
        }).catch((err) => {
            console.log(err, "err");
        })
    }
}

export const updateStu = (data) => {
    return dispatch => {
        updateDoc(doc(db, "Students", `${data.id}`), data).then((res) => {
            console.log("Update", res);
            dispatch(UpdateStudent())
        }).catch((err) => {
            console.log(err, "err");
        })
    }
}

export const deleteStu = (id) => {
    return dispatch => {
        deleteDoc(doc(db, "Students", `${id}`)).then(() => {
            console.log("delete");
            dispatch(getsStu())
        }).catch((err) => {
            console.log(err, "err");
        })
    }
}