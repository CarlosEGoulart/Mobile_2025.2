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
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(Ex1)/ex1Screen1" options={{ headerShown: true, title: 'Tela 1 do EX1' }} />
      <Stack.Screen name="(Ex1)/ex1Screen2" options={{ headerShown: true, title: 'Tela 2 do EX1' }} />
      <Stack.Screen name="(Ex2)/ex2Screen1" options={{ headerShown: true, title: 'Tela 1 do EX2' }} />
      <Stack.Screen name="(Ex2)/[id]" options={{ headerShown: true, title: 'Tela 2 do EX2' }} />
      <Stack.Screen name="(Ex3)/ex3Screen1" options={{ headerShown: true, title: 'Tela 1 do EX3' }} />
      <Stack.Screen name="(Ex3)/ex3Screen2" options={{ headerShown: true, title: 'Tela 2 do EX3' }} />
      <Stack.Screen name="(Ex5)/(tabs)" options={{headerShown: true, title:'EX5'}} />
    </Stack>

  );
}
