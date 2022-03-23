import React, { useState, useCallback } from 'react';
import { useClapAnimation } from '../customHooks/useClapAnimation.js';
import ClapCount from '../Subcomponents/ClapCount.js';
import ClapIcon from '../Subcomponents/ClapIcon.js';
import CountTotal from '../Subcomponents/CountTotal.js';

import styles from './index.css';

const initialState = {
    count: 0,
    countTotal: 267,
    isClicked: false
};

export function MediumClap() {
    const MAXIMUM_INPUT_CLAP = 50;

    const [clapState, setClapState] = useState(initialState);
    const { count, countTotal, isClicked } = clapState;

    const [{ clap, clapCountTotal, clapIcon, clapCount }, setRefs] = useState({});

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

    return (
        <button ref={setRef} data-refkey="clap" className={styles.clap} onClick={handleClapClicked}>
            <ClapIcon isClicked={isClicked} setRef={setRef} />
            <ClapCount count={count} setRef={setRef} />
            <CountTotal countTotal={countTotal} setRef={setRef} />
        </button>
    );
}

export default React.forwardRef((props, ref) => <MediumClap clapRef={ref} {...props} />);
