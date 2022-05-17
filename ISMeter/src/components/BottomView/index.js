import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function Bottomview({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={{uri: 'data:image/png;base64,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'}}
       style={styles.image} />
        <Text style={styles.text}>INTERNET{'\n'}SPEED-METER</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{backgroundColor: '#000', padding:'5%', borderRadius:12}}>
          <Text style={{color: '#fff' , fontSize: 24,padding:'2%'}}>Click Here</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 45,
    fontStyle: 'normal',
    marginBottom: '17%',
    textAlign: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: '17%',
    padding: '17%',
  },
});
