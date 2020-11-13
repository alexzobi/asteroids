import React from 'react';
import { View } from 'react-native';

type Props = {
  children: React.ReactNode;
}

const Component = (props: Props) => (
  <View style={{ flexGrow: 1, backgroundColor: 'black' }} {...props} />
);

export default Component;
