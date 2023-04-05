import { signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../Firebase"
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../Constant/Action.Types"

const provider = new GoogleAuthProvider();

const LoginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

const LoginFail = (err) => {
    return {
        type: LOGIN_FAIL,
        payload: err
    }
}

const LogoutSuccess = (user) => {
    return {
        type: LOGOUT_SUCCESS,
        payload: user
    }
}

const LogoutFail = (err) => {
    return {
        type: LOGOUT_FAIL,
        payload: err
    }
}

const SignUpSuccess = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: user
    }
}

const SignUpFail = (err) => {
    return {
        type: SIGNUP_FAIL,
        payload: err
    }
}

export const LoginWithGoogle = () => {
    return dispatch => {
        signInWithPopup(auth, provider).then((usercredential) => {
            console.log("user", usercredential);
            const user = usercredential.user
            dispatch(LoginSuccess(user));
        }).catch((err) => {
            console.log("err", err);
            dispatch(LoginFail(err));
        })
    }
}

export const logout = () => {
    return dispatch => {
        signOut(auth).then((res) => {
            console.log("result", res);
            dispatch(LogoutSuccess())
        }).catch((err) => {
            console.log("error", err);
            dispatch(LogoutFail(err))
        })
    }
}

export const signUpInitiate = (email, password) => {
    return dispatch => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("userCredential", userCredential);
            const user = userCredential.user
            dispatch(SignUpSuccess(user))
        }).catch((err) => {
            console.log("error", err);
            dispatch(SignUpFail(err))
        })
    }
}

export const logInInitiate = (email, password) => {
    return dispatch => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("userCredential", userCredential);
            const user = userCredential.user
            dispatch(LoginSuccess(user))
        }).catch((err) => {
            console.log("error", err.code);
            dispatch(LoginFail(err.code))
        })
    }
}