import React, {useState,Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';
import {measureConnectionSpeed} from 'react-native-network-bandwith-speed';

export default class Bottomview2 extends Component {
  state = {
    value: 0,
  };
  onChange = (value) => this.setState({ value: parseInt(value) });
  getNetworkBandwidth = async () => {
    try {
      const networkSpeed = await measureConnectionSpeed();
      console.log(networkSpeed); // Network bandwidth speed
      this.setState({value:networkSpeed.speed});
    } catch (err) {
      this.setState({value: 0});
      console.log(err);
    }
  };
  componentDidMount(){
    
  }
  render() {
    {this.getNetworkBandwidth();}
    return (
      <View style={styles.container}>
        <Speedometer
          value={this.state.value}
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
