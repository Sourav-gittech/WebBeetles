import { configureStore } from "@reduxjs/toolkit";
import userAuthSliceReducer from "../slice/authSlice/authSlice";
import categorySliceReducer from "../slice/categorySlice";
import authSliceReducer from "../slice/authSlice/checkAuth";

const store = configureStore({
    reducer: {
        checkAuth:authSliceReducer,
        userAuth: userAuthSliceReducer,
        categoryAuth: categorySliceReducer
    }
});

export default store;