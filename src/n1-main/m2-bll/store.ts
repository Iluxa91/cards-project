import {combineReducers, legacy_createStore as createStore} from "redux";
import {loginReducer} from "./login-reducer";
import {authReducer} from "./auth-reducer";
import {profileReducer} from "./profile-reducer";

const rootReducer = combineReducers({
    login:loginReducer,
    auth:authReducer,
    profile:profileReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;