import React, { useContext } from 'react';
import { MediumClapContext } from '../../patterns/03';

import styles from '../../patterns/index.css';

export default function CountTotal() {
    const { countTotal, setRef } = useContext(MediumClapContext);
    return (
        <span ref={setRef} id="clapCountTotal" data-refkey="clapCountTotal" className={styles.total}>
            {countTotal}
        </span>
    );
}
