import React from 'react';
import { View } from 'react-native';
import Level from './src/pages/Level';
import Ship from './src/components/Ship';
import Joypad, { JoypadContext } from './src/components/Joypad';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <Level />
        {/* <JoypadContext.Consumer> */}
        {/* <Level>
          <Ship />
        </Level> */}
      {/* </JoypadContext.Consumer> */}
      {/* <Joypad /> */}
    </View>
  );
};

export default App;
