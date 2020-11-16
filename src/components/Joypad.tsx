import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { interpolate } from 'react-native-reanimated';

import Joycon, { SIZE } from './Joycon';

const styles = StyleSheet.create({
  Joypad: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingBottom: 35,
  }
})

type CoordsType = { x: number, y: number };

type Props = {
  onUserInteraction: (id: string, value: any) => void;
}

export const JoypadContext = React.createContext({
  'joycon-left': { x: 0, y: 0},
  'joycon-right': { x: 0, y: 0},
  setJoypadValue: (buttonId: string, value: any) => {},
});

const Joypad = ({
  onUserInteraction,
}: Props) => {

  const setJoyconVal = (side: 'left' | 'right', coords: CoordsType) => {
    "worklet";

    const xInterp = interpolate(coords.x, [-(SIZE/2), (SIZE/2)], [-100, 100]);
    const yInterp = interpolate(coords.y, [-(SIZE/2), (SIZE/2)], [-100, 100]);

    onUserInteraction(`joycon-${side}`, { x: xInterp, y: yInterp })
    // console.log('ALEXDEBUG: translateX.value', translateX.value)
    // console.log('ALEXDEBUG: xVal', xVal);
    // console.log('ALEXDEBUG: yVal', yVal);

    // setXVal(coords.x);
    // setYVal(coords.y);
  }

  return (
    <View style={styles.Joypad} pointerEvents="box-none">
      {/* <JoypadContext.Provider
        value={{
          ...interactionValues,
        }}
      > */}
        <Joycon
          onUserInteraction={vals => {
            "worklet";

            setJoyconVal('left', vals)
          }}
        />
        <View>
          <Text
            style={{ color: '#fff', alignSelf: 'center' }}
          >
            X: 0
          </Text>
          <Text
            style={{ color: '#fff', alignSelf: 'center' }}
          >
            Y: 0
          </Text>
        </View>
        <View>
          <Text
            style={{ color: '#fff', alignSelf: 'center' }}
          >
            X: 0
          </Text>
          <Text
            style={{ color: '#fff', alignSelf: 'center' }}
          >
            Y: 0
          </Text>
        </View>
        <Joycon
          onUserInteraction={vals => {
            "worklet";

            setJoyconVal('right', vals)
          }}
        />
      {/* </JoypadContext.Provider> */}
    </View>
  )
};

export default Joypad;
