import {GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE} from "./actionType";
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

const getData = (page, limit) => (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/downloads",
        method : "get",
        params : {
            _page : page,
            _limit: limit
        }
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

export {getDataRequest, getDataSuccess, getDataFailure, getData}