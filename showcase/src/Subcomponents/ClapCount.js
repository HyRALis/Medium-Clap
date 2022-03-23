import React from 'react';

import styles from '../patterns/index.css';

export default function ClapCount({ count, setRef }) {
    return (
        <span ref={setRef} id="clapCount" data-refkey="clapCount" className={styles.count}>
            {' '}
            + {count}
        </span>
    );
}
