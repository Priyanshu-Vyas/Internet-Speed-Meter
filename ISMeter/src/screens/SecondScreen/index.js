import React from 'react';
import Topview2 from '../../components/TopView2';
import Bottomview2 from '../../components/BottomView2';
import { TouchableOpacity, View, Text } from 'react-native';

export default function Secondscreen({navigation}) {
  return (
    <View style={{flex:1 , backgroundColor:'#000' }}>
      <Topview2/>
      <Bottomview2/>
      {/* <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
        <Text style={{color: "blue" , fontSize: 20}}>BACK</Text>
      </TouchableOpacity> */}
    </View>
  );
}