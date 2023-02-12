import React from 'react';
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';
export const FadeScreen = () => {

  const { opacity, FadeIn, FadeOut } = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#c8e2f6',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Animated.View
        style={{
          backgroundColor: '#5856D6',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 10
        }}
      />
    <Button
      title="Fade In"
      onPress={FadeIn}
    />
    <Button
      title="Fade Out"
      onPress={FadeOut}
    />

    </View>
  );
};

export default FadeScreen;