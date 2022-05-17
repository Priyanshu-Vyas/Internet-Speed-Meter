import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';
import {measureConnectionSpeed} from 'react-native-network-bandwith-speed';

export default function Bottomview2({navigation}) {
  getNetworkBandwidth = async () => {
    try {
      const networkSpeed = await measureConnectionSpeed();
      console.log(networkSpeed); // Network bandwidth speed
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Speedometer
        value={this.getNetworkBandwidth.networkSpeed}
        fontFamily="squada-one">
        <Background />
        <Arc />
        <Needle />
        <Progress />
        <Marks />
        <Indicator />
      </Speedometer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});
