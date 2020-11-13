/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Level from './src/pages/Level';
import Ship from './src/components/Ship';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Level>
      <Ship />
    </Level>
  );
};

export default App;
