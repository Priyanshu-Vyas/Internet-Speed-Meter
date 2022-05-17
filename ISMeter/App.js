import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainscreen from "./src/screens/MainScreen";
import Secondscreen from "./src/screens/SecondScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Mainscreen} options={{ headerShown : false }}/>
        <Stack.Screen name="Main" component={Secondscreen} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}