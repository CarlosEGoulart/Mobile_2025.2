import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

export default function screen1() {
  return (
    <View style={styles.container}>
      <Text>Tela 1</Text>
      <Link href="/(Ex1)/screen2" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para a Tela 2</Text>
        </TouchableOpacity>
      </Link>
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
  button: {
    backgroundColor: '#1d1d1dff',
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
