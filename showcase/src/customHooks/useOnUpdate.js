import { useRef, useEffect } from 'react';

export const useOnUpdate = (callback, dependencies) => {
    const componentJustMounted = useRef(true);

    useEffect(() => {
        if (!componentJustMounted.current) {
            callback();
        }
        componentJustMounted.current = false;
    }, dependencies);
};
