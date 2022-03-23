import React from 'react';

import styles from '../patterns/index.css';

export default function CountTotal({ countTotal }) {
    return (
        <span id="clapCountTotal" className={styles.total}>
            {countTotal}
        </span>
    );
}
