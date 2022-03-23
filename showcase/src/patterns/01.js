import React, { useState } from 'react';
import withClapAnimation from '../hoc/withClapAnimation.js';
import ClapCount from '../Subcomponents/ClapCount.js';
import ClapIcon from '../Subcomponents/ClapIcon.js';
import CountTotal from '../Subcomponents/CountTotal.js';

import styles from './index.css';

const initialState = {
    count: 0,
    countTotal: 267,
    isClicked: false
};

export function MediumClap({ animationTimeline, clapRef }) {
    const MAXIMUM_INPUT_CLAP = 50;

    const [clapState, setClapState] = useState(initialState);
    const { count, countTotal, isClicked } = clapState;

    const handleClapClicked = () => {
        animationTimeline.replay();
        setClapState((prevstate) => ({
            count: Math.min(prevstate.count + 1, MAXIMUM_INPUT_CLAP),
            countTotal: prevstate.count + 1 < MAXIMUM_INPUT_CLAP ? prevstate.countTotal + 1 : prevstate.countTotal,
            isClicked: true
        }));
    };

    return (
        <button ref={clapRef} id="clap" className={styles.clap} onClick={handleClapClicked}>
            <ClapIcon isClicked={isClicked} />
            <ClapCount count={count} />
            <CountTotal countTotal={countTotal} />
        </button>
    );
}

export default withClapAnimation(React.forwardRef((props, ref) => <MediumClap clapRef={ref} {...props} />));