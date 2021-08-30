import {GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS, POST_DATA_FAILURE} from "./actionTypes";
import Axios from "axios"

const axios = Axios.create({
    baseURL:"https://json-server-mocker-shanoor.herokuapp.com"
})

const getDataRequest = () => {
    return {
        type : GET_DATA_REQUEST
    }
}

const getDataSuccess = (payload) => {
    return {
        type : GET_DATA_SUCCESS,
        payload
    }
}

const getDataFailure = (error) => {
    return {
        type : GET_DATA_FAILURE,
        payload : error
    }
}

const postDataRequest = () => {
    return {
        type : POST_DATA_REQUEST,
    }
}

const postDataSuccess = (payload) => {
    return {
        type : POST_DATA_SUCCESS,
        payload
    }
}

const postDataFailure = (error) => {
    return {
        type: POST_DATA_FAILURE,
        error
    }
} 

const getData = (payload) => (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/patients",
        method : "get",
    }

    return axios(config)
    .then((res) => {
        dispatch(getDataSuccess(res.data))
        console.log(res.data);
    })
    .catch((err) => {
        dispatch(getDataFailure(err));
        console.log(err);
    })
}

const postData = (payload) => (dispatch) => {
    dispatch(postDataRequest())

    const config = {
        url:"/patients",
        method: "post",
        data : payload
    }

    return axios(config)
    .then((res) => {
        dispatch(postDataSuccess(res.data))
        console.log(res.data)
        dispatch(getData())
    })
    .catch((err) => {
        dispatch(postDataFailure())
        console.log(err);
    })
}

export {getDataRequest, getDataSuccess, getDataFailure, getData, postData}