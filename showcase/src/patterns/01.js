import React, { useState } from 'react';
import ClapCount from '../Subcomponents/ClapCount.js';
import ClapIcon from '../Subcomponents/ClapIcon.js';
import CountTotal from '../Subcomponents/CountTotal.js';

import styles from './index.css';

const initialState = {
    count: 0,
    countTotal: 267,
    isClicked: false
};

export default function MediumClap() {
    const MAXIMUM_INPUT_CLAP = 50;

    const [clapState, setClapState] = useState(initialState);
    const { count, countTotal, isClicked } = clapState;

    const handleClapClicked = () => {
        setClapState((prevstate) => ({
            count: Math.min(prevstate.count + 1, MAXIMUM_INPUT_CLAP),
            countTotal: prevstate.count + 1 < MAXIMUM_INPUT_CLAP ? prevstate.countTotal + 1 : prevstate.countTotal,
            isClicked: true
        }));
    };

    return (
        <button className={styles.clap} onClick={handleClapClicked}>
            <ClapIcon isClicked={isClicked} />
            <ClapCount count={count} />
            <CountTotal countTotal={countTotal} />
        </button>
    );
}
