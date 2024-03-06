import {useEffect, useState} from "react";

export const useDebounce = (searchRequest, delay) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => setValue(searchRequest), delay);
        return () => clearTimeout(handler);
    }, [delay, searchRequest]);

    return value;
};
