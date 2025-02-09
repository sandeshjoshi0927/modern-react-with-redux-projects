import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { carsReducer } from "./slices/carsSlice";
import { changeName, changeCost } from "./slices/formSlice";
import { changeSearchTerm, addCar, removeCar } from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };
