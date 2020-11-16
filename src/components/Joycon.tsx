import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

export const SIZE = 120;

const styles = StyleSheet.create({
  Joycon: {
    borderColor: 'lightgray',
    borderWidth: 2,
    opacity: 0.25,
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Joycon__Nose: {
    height: SIZE / 2,
    width: SIZE / 2,
    borderRadius: SIZE / 4,
    backgroundColor: 'lightgray',
  }
})

type Props = {
  onUserInteraction: (coords: { x: number, y: number }) => void;
}

const Joycon = ({
  onUserInteraction,
}: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const { width, height } = Dimensions.get('screen');
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (evt, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (evt, ctx) => {
      if (Math.abs(evt.translationX * 2) < SIZE) {
        translateX.value = ctx.offsetX + evt.translationX;
      }

      if (Math.abs(evt.translationY * 2) < SIZE) {
        translateY.value = ctx.offsetY + evt.translationY;
      }

      const xInterp = interpolate(translateX.value, [-(SIZE/2), SIZE/2], [-100, 100]);
      const yInterp = interpolate(translateY.value, [-(SIZE/2), SIZE/2], [-100, 100]);

      onUserInteraction({ x: xInterp, y: yInterp });
    },
    onEnd: evt => {
      translateX.value = withTiming(0, {
        duration: 10,
        // easing: ,
      });
      translateY.value = withTiming(0), {
        duration: 10,
        // easing: ,
      };
    },
  });

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ]
    }
  });

  return (
    <View style={styles.Joycon}>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={animationStyle}>
          <View style={styles.Joycon__Nose} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
};

export default Joycon;
