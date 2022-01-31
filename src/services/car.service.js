import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const carService = {
    getAll:()=>axiosService.delete(urls.cars),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    updateById:(id, car)=>axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
}