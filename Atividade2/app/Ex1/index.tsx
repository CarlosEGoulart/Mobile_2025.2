import { Stack, useNavigation } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function index() {
    const navigation = useNavigation()
  
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
  
    return (
    <View style={styles.container}>
      <Text>index</Text>
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