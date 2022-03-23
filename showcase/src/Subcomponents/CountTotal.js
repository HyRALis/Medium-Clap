import React from 'react';

import styles from '../patterns/index.css';

export default function CountTotal({ countTotal, setRef }) {
    return (
        <span ref={setRef} id="clapCountTotal" data-refkey="clapCountTotal" className={styles.total}>
            {countTotal}
        </span>
    );
}
