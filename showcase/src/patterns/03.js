import React, { useState, useCallback, useMemo, createContext } from 'react';
import { useClapAnimation } from '../customHooks/useClapAnimation.js';
import ClapCount from '../Subcomponents/03/ClapCount.js';
import ClapIcon from '../Subcomponents/03/ClapIcon.js';
import CountTotal from '../Subcomponents/03/CountTotal.js';

import styles from './index.css';

export const MediumClapContext = createContext();
const { Provider } = MediumClapContext;

const initialState = {
    count: 0,
    countTotal: 267,
    isClicked: false
};

export function MediumClap({ children }) {
    const MAXIMUM_INPUT_CLAP = 50;

    const [clapState, setClapState] = useState(initialState);

    const [{ clap, clapCountTotal, clapCount }, setRefs] = useState({});

    const setRef = useCallback((node) => {
        setRefs((prevState) => ({
            ...prevState,
            [node.dataset.refkey]: node
        }));
    }, []);

    const animationTimeline = useClapAnimation({
        clapEl: clap,
        clapCountTotalEl: clapCountTotal,
        clapCountEl: clapCount
    });

    const handleClapClicked = () => {
        animationTimeline.replay();
        setClapState((prevstate) => ({
            count: Math.min(prevstate.count + 1, MAXIMUM_INPUT_CLAP),
            countTotal: prevstate.count + 1 < MAXIMUM_INPUT_CLAP ? prevstate.countTotal + 1 : prevstate.countTotal,
            isClicked: true
        }));
    };

    const memoizedProviderValue = useMemo(() => ({ ...clapState, setRef }), [clapState, setRef]);

    return (
        <Provider value={memoizedProviderValue}>
            <button ref={setRef} data-refkey="clap" className={styles.clap} onClick={handleClapClicked}>
                {children}
            </button>
        </Provider>
    );
}

const Usage = () => {
    return (
        <MediumClap>
            <ClapCount />
            <CountTotal />
            <ClapIcon />
        </MediumClap>
    );
};

export default Usage;
