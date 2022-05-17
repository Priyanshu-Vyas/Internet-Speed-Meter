import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Topview2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NETWORK{'\n'}SPEED</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090F0B',
    textAlign: 'left',
    padding: '2%',
  },
  text: {
    color: 'white',
    fontSize: 40,
    margin: '4%',
    letterSpacing: 4,
    textAlign: 'center',
  },
});
