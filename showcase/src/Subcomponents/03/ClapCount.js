import React, { useContext } from 'react';
import { MediumClapContext } from '../../patterns/03';

import styles from '../../patterns/index.css';

export default function ClapCount() {
    const { count, setRef } = useContext(MediumClapContext);
    return (
        <span ref={setRef} id="clapCount" data-refkey="clapCount" className={styles.count}>
            {' '}
            + {count}
        </span>
    );
}
