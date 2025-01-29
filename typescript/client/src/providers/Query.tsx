'use client'

import {ReactNode, useState} from 'react';
import {QueryClient, QueryClientProvider as Provider} from '@tanstack/react-query';

type Query = {
    children: ReactNode
}

const Query = ({children}: Query) => {

    const [query] = useState(() => new QueryClient());

    return (
        <Provider client={query}>
            {children}
        </Provider>
    );
};

export default Query;