import { createWrapper } from "next-redux-wrapper";

import ls from "localstorage-slim";
import { configureStore } from "@reduxjs/toolkit";

import common from "./reducers/common.reducer";

const STORE_ENCRYPTION_SECRET = 88;

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        // encrypt with a custom secret
        ls.set("persistentState", serializedState, {
            encrypt: true,
            secret: STORE_ENCRYPTION_SECRET,
        });
        // localStorage.setItem('persistentState', serializedState)
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStorage and convert back in to an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serializedState = ls.get("persistentState", {
            decrypt: true,
            secret: STORE_ENCRYPTION_SECRET,
        });

        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        // console.warn(e)
        return undefined;
    }
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const preloadedState = loadFromLocalStorage();

export const store = configureStore({
    reducer: {
        common: common,
    },
    devTools: true,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
