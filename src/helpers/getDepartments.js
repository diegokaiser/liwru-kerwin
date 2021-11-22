import { fetchHelper } from './fetch';

export const getDepartments = async()=>{
    const data = await fetchHelper('https://liwru-pollux-apis.herokuapp.com/api/departamentos')
    return data
}
