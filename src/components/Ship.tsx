import React from 'react';
import { View, StyleSheet } from 'react-native';

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

const Ship = ({}: Props) => (
  <View style={styles.Ship}>
    <View style={styles.Ship__Nose} />
  </View>
);

export default Ship;
