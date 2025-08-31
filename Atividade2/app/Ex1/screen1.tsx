import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Stack, Link} from 'expo-router';

export default function screen1() {
  
  return (
    <View style={styles.container}>
      <Text>screen1</Text>
      
      <Stack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  }
})