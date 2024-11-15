import {configureStore} from '@reduxjs/toolkit';
import client from './features/client';

const createStore = () => {
    return configureStore({
        reducer: {
            client
        }
    });
};

export interface Store extends ReturnType<typeof createStore> {}
export interface State extends ReturnType<Store['getState']> {}
// interface Dispatch extends ReturnType<Store['dispatch']> {}

export default createStore;