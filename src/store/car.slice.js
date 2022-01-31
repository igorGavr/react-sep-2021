import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../services";

const initialState = {
    cars: [],
    status:null,
    error:null,
    carForUpdate:null
}
export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {dispatch,rejectWithValue}) => {
        try {
            return await carService.getAll()
        } catch (e) {
            console.log(e.response.data.detail);
            return rejectWithValue(e.response.data.detail)
        }
    }
)
export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({id, car}, {dispatch})=>{
        const newCar = await carService.updateById(id, car);
        // dispatch(updateCar({car:newCar}))
        return {car:newCar}
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        carToUpdate:(state, action)=>{
            state.carForUpdate = action.payload.car
        },
        updateCar:(state, action)=>{
            // const index = state.cars.findIndex(car=>car.id === action.payload.car.id);
            // state.cars[index] = action.payload.car
            // state.carForUpdate = null
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.error = action.payload
        },

        [updateCarById.fulfilled]:(state, action)=>{
            const index = state.cars.findIndex(car=>car.id === action.payload.car.id);
            state.cars[index] = action.payload.car
            state.carForUpdate = null
        }
    }
});

const carReducer = carSlice.reducer;
export const {carToUpdate,updateCar} = carSlice.actions;

export default carReducer
