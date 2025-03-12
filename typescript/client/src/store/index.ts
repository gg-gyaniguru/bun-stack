import {configureStore} from '@reduxjs/toolkit';
import client from './features/client';

const createStore = () => {
    return configureStore({
        reducer: {
            client
        }
    });
};

type Store = ReturnType<typeof createStore>;
type State = ReturnType<Store['getState']>;
type Dispatch = ReturnType<Store['dispatch']>;

export type {Store, State, Dispatch};

export default createStore;