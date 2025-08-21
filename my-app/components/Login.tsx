import { View, Text } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
    </View>
  )
}