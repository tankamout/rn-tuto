import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/Login'
import SignUp from '../../screens/SignUp'

const Stack=createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signup' component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})