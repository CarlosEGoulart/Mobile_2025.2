import { Stack } from 'expo-router';
import React from 'react';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Feed' }} />
      <Stack.Screen name="[postId]" options={{ headerShown: true, title:'Post' }} />
    </Stack>
  );
}
