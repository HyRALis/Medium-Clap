import React from 'react';

import styles from '../patterns/index.css';

export default function ClapCount({ count }) {
    return (
        <span id="clapCount" className={styles.count}>
            {' '}
            + {count}
        </span>
    );
}
