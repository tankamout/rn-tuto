import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'


const Stack=createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
     
    </Stack.Navigator>
  )
}

export default HomeStack
