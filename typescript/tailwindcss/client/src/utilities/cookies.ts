import {cookies} from 'next/headers';

const isCookies = async (key: string) => {
    const {has} = await cookies();
    return has(key);
};

const setCookies = async (key: string, value: string) => {
    const {set} = await cookies();
    set(key, value);
};

const getCookies = async (key: string) => {
    const {get} = await cookies();
    return get(key);
};

const removeCookies = async (key: string) => {
    const {delete: remove} = await cookies();
    remove(key);
}

export {isCookies, getCookies, setCookies, removeCookies};