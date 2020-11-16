import React from 'react';
import { View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import Joypad from '../components/Joypad';
import Ship from '../components/Ship';

type Props = {
  children: React.ReactNode;
}

const Level = (props: Props) => {
  const shipAccX = useSharedValue(0);
  const shipAccY = useSharedValue(0);

  const shipRotation = useSharedValue(0);

  const setInteractionValue = (id: string, value: any) => {
    "worklet";

    switch (id) {
      case 'joycon-right':
        // set max speed here by capping values
        shipAccX.value += value.x;
        shipAccY.value += value.y;

        break;

      case 'joycon-left':
        shipRotation.value = Math.atan2(value.y, value.x);

        break;

      default:
        break;
    }
  }

  return (
    <View style={{ flexGrow: 1, backgroundColor: 'black' }} {...props}>
      <Ship
        accX={shipAccX}
        accY={shipAccY}
        rotation={shipRotation}
      />
      <Joypad
        onUserInteraction={setInteractionValue}
      />
    </View>
  )
};

export default Level;
