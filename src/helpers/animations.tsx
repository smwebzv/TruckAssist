const animationScreen = {
  animation: "spring",
  config: {
    speed: 200,
    overshootClamping: false,
    restDisplacementThreshold: 0,
    restSpeedThreshold: 0,
  },
};

const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const animations = {
  screen: animationScreen,
  fadeIn: fadeIn,
};

export default animations;
