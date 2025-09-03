import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function index() {
  const postId = Math.ceil(Math.random() * 10);

  return (
    <View>
      <Link href="/Post" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para o post {postId}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
