import { Stack } from 'expo-router';
import React from 'react';

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#383838',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Post" options={{ headerShown: false }} />
    </Stack>
  );
}
