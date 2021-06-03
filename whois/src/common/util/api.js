import * as axios from "axios";
import {API_HOST} from "../constant";
import {message} from 'antd'

export function callApi({method='get', url, params, data}) {
    return axios ({
        url,
        method,
        baseURL: API_HOST,
        params,
        data,
        withCredentials: true,
    }).then(response => {
        const { resultCode, resultMessage} = response.data;
        if (resultCode <0) {
            message.error(resultMessage)
        }
        return {
            isSuccess: resultCode === ResultCode.Success,
            data: response.data.data,
            resultCode,
            resultMessage
        }
    })
}


export const ResultCode = {
    Success: 0
}
