'use client'

import {ReactNode, useRef} from 'react';
import {Provider} from "react-redux";
import createStore, {Store as Create} from "@/store";

interface Store {
    children: ReactNode
}

const Store = ({children}: Store) => {

    const store = useRef<Create | undefined>(undefined);

    if (!store.current) {
        store.current = createStore();
    }

    return (
        <Provider store={store.current}>
            {children}
        </Provider>
    );
};

export default Store;