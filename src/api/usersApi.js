import axios from '../utils/axiosConfig'
import { API_ROUTES } from 'utils/common/constant/constant'

export const getUsersApi = (params) => axios.get(API_ROUTES.GET_USER_API, { params })
export const addUsersApi = (body) => axios.post(API_ROUTES.ADD_USER_API, body)
export const updateUsersApi = (id,body) => axios.put(`${API_ROUTES.UPDATE_USER_API}/${id}`, body)

export const deleteUsersApi = (id) => axios.delete(`${API_ROUTES.DELETE_USER_API}/${id}`)
