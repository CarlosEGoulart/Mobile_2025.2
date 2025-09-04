import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="(Feed)"
        options={{
          headerShown: false,
          title: 'Feed'
        }}
      />
    </Tabs>
  );
}