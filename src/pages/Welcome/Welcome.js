import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./Welcome.style"

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To tarifka App</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CategoryPage")}>
          <Text style={styles.button_text}>Let's take a look inside!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome