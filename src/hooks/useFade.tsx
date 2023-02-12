import { useRef } from 'react';
import { Animated } from 'react-native';
export const useFade = () => {

  const opacity = useRef(new Animated.Value(0)).current;

  const FadeIn = () => {

    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }
    ).start()
  }

  const FadeOut = () => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }
    ).start()
  }

  return {
    opacity,
    FadeIn,
    FadeOut
  }

};
