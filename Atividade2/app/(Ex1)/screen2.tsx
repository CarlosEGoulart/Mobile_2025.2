import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

export default function screen2() {
  return (
    <View style={styles.container}>
      <Text>Tela 2</Text>
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
  },
});
