import React, { Component } from 'react';
import mojs from 'mo-js';

import { getClapAnimations } from '../utils/animationsUtils';

export default function withClapAnimation(WrappedComponent) {
    class WithClapAnimation extends Component {
        animationTimeline = new mojs.Timeline();
        state = {
            animationTimeline: this.animationTimeline
        };

        componentDidMount() {
            const { scaleButton, countAnimation, countTotalAnimation, triangleBurstAnimation, circleBurstAnimation } =
                getClapAnimations(this.props.forwardedRef.current.id);
            this.props.forwardedRef.current.style.transform = 'scale(1,1)';

            this.setState({
                animationTimeline: this.animationTimeline.add([
                    scaleButton,
                    countTotalAnimation,
                    countAnimation,
                    triangleBurstAnimation,
                    circleBurstAnimation
                ])
            });
        }

        render() {
            const { forwardedRef, ...rest } = this.props;

            return <WrappedComponent {...rest} animationTimeline={this.state.animationTimeline} ref={forwardedRef} />;
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClapAnimation {...props} forwardedRef={ref} />;
    });
}
