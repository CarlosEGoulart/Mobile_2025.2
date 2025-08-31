import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Stack, useNavigation } from 'expo-router';

export default function screen2() {
    const navigation = useNavigation();
    
    return (
    <View style={styles.container}>
        <Text>screen2</Text>
        <Button title="Voltar para tela 1" onPress={() => navigation.navigate('screen1')} />
        <Stack />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  }
})