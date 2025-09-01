import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function screen1() {
  const id: number = Math.ceil((Math.random())*10)
  
  
  return (
    <View style={styles.container}>
      <Text>O ID passado é: {id}</Text>
    
      <Link href={`/(Ex2)/${id}`} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para a Tela 2</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
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