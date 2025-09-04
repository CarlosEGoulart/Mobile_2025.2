import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function Post() {
    const { postId } = useLocalSearchParams();
  
  return (
    <View style={styles.container}>
      <Text>Post {postId}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#383838',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
    buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});