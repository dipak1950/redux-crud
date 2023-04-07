import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../Constant/Action.Types"

const initialState = {
    isLoading: false,
    user: null,
    error: null
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: null
            }
            break;
        }

        case LOGIN_FAIL: {
            return {
                ...state,
                isLoading: false,
                user: null,
                error: action.payload
            }
            break;
        }

        case SIGNUP_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: null
            }
            break;
        }

        case SIGNUP_FAIL: {
            return {
                ...state,
                isLoading: false,
                user: null,
                error: action.payload
            }
            break;
        }

        case LOGOUT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: null,
                error: null
            }
            break;
        }

        case LOGOUT_FAIL: {
            return {
                ...state,
                isLoading: false,
                user: null,
                error: action.payload
            }
            break;
        }
        default:
            return state;
    }
}

export default AuthReducer;