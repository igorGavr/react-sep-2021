// const userService = {
//     getall: () => fetch('sdfsdfsdfsdf').then(value => value.json())
//     create: (user) => fetch('sdfsdfsdfsdf', {
//         method:'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//             body:car
//     }).then(value => value.json())
// }
import {axiosService} from "./axios.service";

const userService ={
    getAll:()=>axiosService.get('/users').then(value => value.data),
    create:(user)=>axiosService.post('/users', user)
}








