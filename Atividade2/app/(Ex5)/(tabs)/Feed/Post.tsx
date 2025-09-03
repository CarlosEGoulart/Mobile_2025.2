import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Post() {
    const {postId} = useLocalSearchParams();
    
    return (
    <View>
      <Text>Post {postId}</Text>
    </View>
  )
}