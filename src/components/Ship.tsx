import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withDecay,
  interpolate,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  Ship: {
    position: 'absolute',
    backgroundColor: 'lightgray',
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  Ship__Nose: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  }
})

type Props = {
  accX: { value: number };
  accY: { value: number };
  rotation: { value: number };
}

const Ship = ({
  accX,
  accY,
  rotation,
}: Props) => {
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: accX.value * .1 },
        { translateY: accY.value * .1 },
        { rotate: rotation.value },
      ]
    }
  });

  return (
    <Animated.View style={[animationStyle, styles.Ship]}>
      <View style={styles.Ship__Nose} />
    </Animated.View>
  )
};

export default Ship;
