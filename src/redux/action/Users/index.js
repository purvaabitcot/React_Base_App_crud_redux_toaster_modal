import * as API from 'api/usersApi'
import actionType from './actionType'
import * as commonService from 'utils/common/CommonService'
import { type } from '@testing-library/user-event/dist/type';
import { ActionType } from 'redux-promise-middleware';

export const getUsers = (params) => async dispatch => {
    commonService.isLoading.onNext(true);
    let res =  await API.getUsersApi(params) 
    dispatch({
        type: actionType.GET_USERS,
        payload:res
    })
    commonService.isLoading.onNext(false);
}

export const addUsers = (params) => async dispatch => {
    commonService.isLoading.onNext(true);
    const response = await API.addUsersApi(params);
    dispatch({
        type: actionType.ADD_USERS,
        payload: response
    })
    commonService.isLoading.onNext(false);
    return response;
}

export const updateUsers = (id,body) => async dispatch => {
    commonService.isLoading.onNext(true);
    const response = await API.updateUsersApi(id,body)
    
    dispatch({
        type: actionType.UPDATE_USERS,
        payload: response
    })
    commonService.isLoading.onNext(false);
    return response;
   
}

export const deleteUsers = (id,userList) => async dispatch =>{
    commonService.isLoading.onNext(true);
    const response =  await API.deleteUsersApi(id)
    const deleteUsers = userList.filter(val => val._id !== id)
   await dispatch({
        type : actionType.DELETE_USERS,
        payload : deleteUsers
    })
    commonService.isLoading.onNext(false);
    return response
}