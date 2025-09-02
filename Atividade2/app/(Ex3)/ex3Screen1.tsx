import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function screen1() {
    const router = useRouter();
  
  
    return (
    <View style={styles.container}>
      <Text>Tela 1 do Exercicio 3</Text>
        <TouchableOpacity style={styles.button} onPress={()=> router.push('/(Ex3)/ex3Screen2') }>
          <Text style={styles.buttonText}>Ir para a Tela 2</Text>
        </TouchableOpacity>
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
