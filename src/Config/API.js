import axios from 'axios'
import {baseUrl} from './BaseURL'
export const getTableData =async (rule)=>{
    return await axios.get(`${baseUrl}${rule}`)
}