import { Stack } from 'expo-router';

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
    </Stack>
  );
}
