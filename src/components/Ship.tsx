import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withDecay,
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

}

const Ship = ({}: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const { width, height } = Dimensions.get('screen');

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (evt, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (evt, ctx) => {
      translateX.value = ctx.offsetX + evt.translationX;
      translateY.value = ctx.offsetY + evt.translationY;
    },
    onEnd: evt => {
      translateX.value = withDecay({
        velocity: evt.velocityX,
        clamp: [0, width - 75], // optionally define boundaries for the animation
      });
      translateY.value = withDecay({
        velocity: evt.velocityY,
        clamp: [0, height - 75], // optionally define boundaries for the animation
      });
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
    <PanGestureHandler {...{onGestureEvent}}>
      <Animated.View style={animationStyle}>
        <View style={styles.Ship}>
          <View style={styles.Ship__Nose} />
        </View>
      </Animated.View>
    </PanGestureHandler>
  )
};

export default Ship;
