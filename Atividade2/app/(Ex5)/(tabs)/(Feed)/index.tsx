import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function index() {
  const postId = Math.ceil(Math.random()*10);
  
  
  return (
    <View>
      <Link href={`/${postId}`} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para o post {postId}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    fontWeight: 'bold'
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
