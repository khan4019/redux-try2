import cartReducers from "./cartReducers";
import { combineReducers } from "redux";

const instaCartApp = combineReducers({
    cart:cartReducers
});

export default instaCartApp;