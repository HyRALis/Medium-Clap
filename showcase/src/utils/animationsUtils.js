import mojs from 'mo-js';

export const getClapAnimations = (input) => {
    const { clapEl, clapCountTotalEl, clapCountEl } = constructAnimationElementsObject(input);

    const TIMELINE_DURATION = 300;
    const COUNT_TOTAL_ANIMATION_DELAY = (3 * TIMELINE_DURATION) / 2;
    const FADE_OUT_COUNT_ANIMATION_DELAY = TIMELINE_DURATION / 2;

    const scaleButton = new mojs.Html({
        el: clapEl,
        duration: TIMELINE_DURATION,
        scale: { 1.3: 1 },
        easing: mojs.easing.ease.out
    });

    const countTotalAnimation = new mojs.Html({
        el: clapCountTotalEl,
        duration: TIMELINE_DURATION,
        delay: COUNT_TOTAL_ANIMATION_DELAY,
        opacity: { 0: 1 },
        y: { 0: -5 },
        easing: mojs.easing.ease.out
    });

    const countAnimation = new mojs.Html({
        el: clapCountEl,
        duration: TIMELINE_DURATION,
        opacity: { 0: 1 },
        y: { 0: -30 },
        easing: mojs.easing.ease.out
    }).then({
        opacity: { 1: 0 },
        y: -80,
        delay: FADE_OUT_COUNT_ANIMATION_DELAY
    });

    const triangleBurstAnimation = new mojs.Burst({
        parent: clapEl,
        radius: { 50: 95 },
        count: 5,
        angle: 30,
        children: {
            shape: 'polygon',
            radius: { 6: 0 },
            stroke: 'rgba(211,54,0,0.5)',
            strokeWidth: 2,
            angle: 210,
            delay: 30,
            speed: 0.2,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
            duration: TIMELINE_DURATION
        }
    });

    const circleBurstAnimation = new mojs.Burst({
        parent: clapEl,
        radius: { 50: 75 },
        angle: 25,
        duration: TIMELINE_DURATION,
        children: {
            shape: 'circle',
            radius: { 3: 0 },
            fill: 'rgba(149,165,166,0.5)',
            strokeWidth: 2,
            angle: 210,
            delay: 30,
            speed: 0.2,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
    });

    return {
        scaleButton,
        countAnimation,
        countTotalAnimation,
        triangleBurstAnimation,
        circleBurstAnimation
    };
};

const constructAnimationElementsObject = (input) => {
    if (typeof input === 'object') {
        const { clapEl, clapCountTotalEl, clapCountEl } = input;
        return { clapEl, clapCountTotalEl, clapCountEl };
    } else {
        return {
            clapEl: `#${input}`,
            clapCountTotalEl: '#clapCountTotal',
            clapCountEl: '#clapCount'
        };
    }
};
