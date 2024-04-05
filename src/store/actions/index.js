import { handleErrors } from "@/utils/index";
import serviceBaseClass from "@/utils/serviceBaseClass";
import { actionTypes } from "../constants/";

var serviceCls = new serviceBaseClass();

export function getDataSuccess(data, keyMapping) {
    return {
        type: actionTypes.data_success + keyMapping,
        data: data,
        keyMapping: keyMapping,
    };
}

export function getDataRequest(keyMapping) {
    return {
        type: actionTypes.data_request,
        keyMapping: keyMapping,
    };
}

export function getDataFailure(keyMapping) {
    return {
        type: actionTypes.data_failure,
        keyMapping: keyMapping,
    };
}

// export const fetchAPI = (method, provider, keyName, payload, callback) => {
//     return (dispatch, getState) => {
//         dispatch(getDataRequest(keyName));
//         return serviceCls.handleAPIFunction(
//             method,
//             provider,
//             payload,
//             (response) => {
//                 dispatch(getDataSuccess(response.data || response, keyName));
//                 callback(response);
//             },
//             (error) => {
//                 handleErrors(error, keyName, callback);
//                 dispatch(getDataFailure(keyName));
//             }
//         );
//     };
// };

export const updateDataByKey = (keyName, response) => {
    return (dispatch, getState) => {
        dispatch(getDataSuccess(response, keyName));
    };
};

export function clearAllData(keepKeys = []) {
    return {
        type: actionTypes.clear_all_data,
        keepKeys, // Pass the keys to keep as a parameter
    };
}
