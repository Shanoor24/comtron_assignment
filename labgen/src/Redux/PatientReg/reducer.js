import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_DATA_REQUEST, POST_DATA_FAILURE, POST_DATA_SUCCESS } from "./actionTypes";



const init = {
    data : [],
    isLoading : false,
    isError : false,
}

const patientReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            return {
                ...state, isLoading : true
            }
        }

        case GET_DATA_SUCCESS: {
            return {
                ...state, data : action.payload, isLoading : false
            }
        }

        case GET_DATA_FAILURE: {
            return {
                ...state, isLoading : false, isError : true
            }
        }

        case POST_DATA_REQUEST: {
            return {
                ...state, isLoading : true
            }
        }

        case POST_DATA_SUCCESS: {
            return {
                ...state, isLoading : false
            }
        }

        case POST_DATA_FAILURE: {
            return {
                ...state, isLoading : false, isError : true
            }
        }
            
        default:
            return state;
    }
}

export {patientReducer};