import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login'
import React from 'react';

export default function App() {
  const handleSearch = (keywords: string) => {
    console.log("Pesquisando: " + keywords)
  };
  
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
});
