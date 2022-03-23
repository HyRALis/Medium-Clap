import mojs from 'mo-js';
import { useLayoutEffect, useState } from 'react';

import { getClapAnimations } from '../utils/animationsUtils';

export const useClapAnimation = ({ clapEl, clapCountTotalEl, clapCountEl }) => {
    const [animationTimeline, setAnimationTimeline] = useState(() => new mojs.Timeline());

    useLayoutEffect(() => {
        if (!clapEl || !clapCountTotalEl || !clapCountEl) {
            return;
        }

        const { scaleButton, countAnimation, countTotalAnimation, triangleBurstAnimation, circleBurstAnimation } =
            getClapAnimations({ clapEl, clapCountTotalEl, clapCountEl });

        clapEl.style.transform = 'scale(1,1)';

        const filledAninationTimeline = animationTimeline.add([
            scaleButton,
            countTotalAnimation,
            countAnimation,
            triangleBurstAnimation,
            circleBurstAnimation
        ]);
        setAnimationTimeline(filledAninationTimeline);
    }, [clapEl, clapCountTotalEl, clapCountEl]);

    return animationTimeline;
};
