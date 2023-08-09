import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

interface IAnimationInfo {
    animationType: string,
    delayTime: number,
    startingPoint: null | number
}

export default function useComponentAnimation(animationInfo: IAnimationInfo) {
    const {animationType, delayTime, startingPoint} = animationInfo
  const animation = useAnimation();
  const { inView, ref } = useInView();
  const isTypeVertical = animationType === "vertical";
  const axis = isTypeVertical ? "y" : "x";

  useEffect(() => {
    if (inView) {
      animation.start({
        [axis]: 0,
        transition: {
          delay: delayTime,
        },
      });
    } else {
      animation.start({
        [axis]: 40 | startingPoint as number,
      });
    }
  });

  return {animation, ref}
}
